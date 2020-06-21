export default {
  state: {
    feedbacks: [
      {
        id: 1,
        author: 'Andrii',
        date: '30m ago',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit fugiat, molestiae quibusdam perferendis totam magni, voluptate velit veritatis obcaecati aut! Dolorum sapiente quasi illum excepturi ut ea velit similique?',
      },
      {
        id: 2,
        author: 'Ivan',
        date: '1h ago',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit fugiat, molestiae quibusdam perferendis totam magni, voluptate velit veritatis obcaecati aut! Dolorum sapiente quasi illum excepturi ut ea velit similique?',
      },
      {
        id: 3,
        author: 'Mykola',
        date: '45m ago',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit fugiat, molestiae quibusdam perferendis totam magni, voluptate velit veritatis obcaecati aut! Dolorum sapiente quasi illum excepturi ut ea velit similique?',
      },
      {
        id: 4,
        author: 'Petro',
        date: '20m ago',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit fugiat, molestiae quibusdam perferendis totam magni, voluptate velit veritatis obcaecati aut! Dolorum sapiente quasi illum excepturi ut ea velit similique?',
      },
    ],
  },
  mutations: {
    createFeedback(state, fb) {
      state.feedbacks.push(fb);
    },
  },
  actions: {},
  getters: {
    feedbacks(state) {
      return state.feedbacks;
    },
  },
};
