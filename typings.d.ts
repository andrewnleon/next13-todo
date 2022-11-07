export type PageProps = {
  params: {
    todoId: string;
    searchTerm: string;
  };
};

export type SearchResult = {
  [result: string];
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

export type Todo = {
  userID: number;
  id: string;
  title: string;
  completed: boolean;
};
