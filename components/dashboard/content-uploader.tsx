'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

export function ContentUploader() {
  return (
    <Tabs defaultValue="photos" className="w-full">
      <TabsList>
        <TabsTrigger value="photos">Photos</TabsTrigger>
        <TabsTrigger value="videos">Videos</TabsTrigger>
        <TabsTrigger value="audio">Audio</TabsTrigger>
      </TabsList>
      <TabsContent value="photos">
        <p>Photo upload and management will go here.</p>
      </TabsContent>
      <TabsContent value="videos">
        <p>Video upload and management will go here.</p>
      </TabsContent>
      <TabsContent value="audio">
        <p>Audio upload and management will go here.</p>
      </TabsContent>
    </Tabs>
  );
}
