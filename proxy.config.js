const proxy = [
    {
      context: '/post',
      target: 'http://localhost:8403',
      pathRewrite: {'^/post' : ''}
    }
  ];