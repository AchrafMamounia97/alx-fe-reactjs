import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

function PostsComponent() {
  const {
    data: posts,
    error,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // 1 minute
  });

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Refetching...' : 'Refetch Posts'}
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}><strong>{post.title}</strong><br />{post.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostsComponent;
