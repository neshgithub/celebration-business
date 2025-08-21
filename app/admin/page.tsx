import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { prisma } from '@/lib/prisma';

async function getUsers() {
  const users = await prisma.user.findMany({
    include: {
      userPlans: {
        include: {
          plan: true,
        },
      },
    },
  });
  return users;
}

async function getPayments() {
  const payments = await prisma.payment.findMany({
    include: {
      user: true,
      plan: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return payments;
}

export default async function AdminPage() {
  const users = await getUsers();
  const payments = await getPayments();

  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Users</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Plan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {user.userPlans[0]?.plan.name || 'No Plan'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Payments</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.user.name}</TableCell>
                <TableCell>{payment.plan.name}</TableCell>
                <TableCell>{payment.amount.toString()}</TableCell>
                <TableCell>{payment.status}</TableCell>
                <TableCell>
                  {new Date(payment.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
