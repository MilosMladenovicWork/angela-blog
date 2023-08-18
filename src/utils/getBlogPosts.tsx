export interface BlogItemData {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
}

export function getBlogPosts({ page }: { page: number }): {
  items: BlogItemData[];
  total: number;
} {
  let blogItems = [
    {
      id: "1",
      title: "1. Is there life after death?",
      shortDescription: "20/20/23",
      description: "Could it be that there is something beyond the grave?",
    },
    {
      id: "2",
      title: "2. Is there life after death?",
      shortDescription: "20/20/23",
      description: "Could it be that there is something beyond the grave?",
    },
    {
      id: "3",
      title: "3. Is there life after death?",
      shortDescription: "20/20/23",
      description: "Could it be that there is something beyond the grave?",
    },
    {
      id: "4",
      title: "4. Is there life after death?",
      shortDescription: "20/20/23",
      description: "Could it be that there is something beyond the grave?",
    },
    {
      id: "5",
      title: "5. Is there life after death?",
      shortDescription: "20/20/23",
      description: "Could it be that there is something beyond the grave?",
    },
    {
      id: "1",
      title: "1. Is there life after death?",
      shortDescription: "20/20/23",
      description: "Could it be that there is something beyond the grave?",
    },
    {
      id: "2",
      title: "2. Is there life after death?",
      shortDescription: "20/20/23",
      description: "Could it be that there is something beyond the grave?",
    },
    {
      id: "3",
      title: "3. Is there life after death?",
      shortDescription: "20/20/23",
      description: "Could it be that there is something beyond the grave?",
    },
    {
      id: "4",
      title: "4. Is there life after death?",
      shortDescription: "20/20/23",
      description: "Could it be that there is something beyond the grave?",
    },
    {
      id: "5",
      title: "5. Is there life after death?",
      shortDescription: "20/20/23",
      description: "Could it be that there is something beyond the grave?",
    },
  ];

  blogItems = blogItems.slice(page - 1, page + 4);

  return { items: blogItems, total: 10 };
}
