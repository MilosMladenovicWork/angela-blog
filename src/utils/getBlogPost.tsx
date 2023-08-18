export interface BlogPost {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  htmlContent: string;
}

export async function getBlogPost({
  id,
}: {
  id: string;
}): Promise<BlogPost | undefined> {
  const blogPosts = [
    {
      id: "1",
      title: "Is there life after death?",
      shortDescription: "20/20/23",
      description: "Could it be that there is something beyond the grave?",
      htmlContent:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</p><br/><p>laborum.√Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat lllllllljjjjjjjjjjjhgbhjwkcdfhbsnkfmgcdhjsn</p>",
    },
    {
      id: "2",
      title: "Something",
      shortDescription: "10/21/22",
      description: "Beyond the grave?",
      htmlContent:
        "<p><b>Lorem</b> ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</p><br/><p>laborum.√Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat lllllllljjjjjjjjjjjhgbhjwkcdfhbsnkfmgcdhjsn</p>",
    },
  ];

  const blogPost = blogPosts.find((blogPost) => blogPost.id === id);

  return blogPost;
}
