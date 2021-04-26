export default {
  en: [
    {
      appName: 'All In One',
      description: 'Navigate to the app that you want to see',
    },
    {
      appName: 'To-Do',
      description:
        'Create a task, this task will has persisted in your localstorage 🙂',
      inputs: {
        create: 'Create your task',
        action: {
          create: 'Create',
          update: 'update',
        },
      },
      actions: ['all', 'active', 'completed'],
      list: {
        empty: "There's no element yet",
      },
    },
    {
      appName: 'Fizz Buzz',
      description:
        'Increase the number and the number divisible by 3 is replaced by the word "Fizz" and divisible by 5 will be replaced by "Buzz"',
      action: 'Increase',
    },
    {
      appName: 'Book Finder',
      description:
        'an application that will allow users to search for books by entering a query (Title, Author, etc)',
      action: 'Increase',
    },
  ],
};
