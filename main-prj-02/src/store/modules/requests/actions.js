export default {
  async contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      userEmail: payload.email,
      userMessage: payload.message
    };

    const response = await fetch(
      `https://maincouch-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          message: payload.message
        })
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const err = new Error(responseData.message || 'failed to request.');
      throw err;
    }
    console.log(responseData);
    newRequest.id = responseData.name;
    newRequest.coachId = responseData.coachId;
    const token = context.rootGetters.token;
    console.log(token);
    context.commit('addRequest', newRequest);
  },

  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://maincouch-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` +
        token
    );

    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].email,
        message: responseData[key].message
      };
      requests.push(request);
    }

    const responseData = await response.json();
    if (!response.ok) {
      const err = new Error(responseData.message || 'failed to fetch request.');
      throw err;
    }
    context.commit('setRequests', requests);
  }
};
