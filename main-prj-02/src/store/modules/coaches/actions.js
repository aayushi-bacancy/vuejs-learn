export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    console.log(userId);
    const coachData = {
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      hourlyRate: data.rate,
      areas: data.areas
    };
    console.log(coachData);
    const token = context.rootGetters.token;

    const response = await fetch(
      `https://maincouch-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` +
        token,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );
    console.log('hii');
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://maincouch-default-rtdb.firebaseio.com/coaches/.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      //..error..
    }
    const coaches = [];
    for (const key in responseData) {
      const coach = {
        userId: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].rate,
        areas: responseData[key].areas
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};
