let timer;
export default {
  async auth(context, payload) {
    const mode = payload.mode;
    console.log(payload);
    console.log(payload.actionPayoad.email);
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCKmcJ_uKL6JK0pF1xyqq0e0BMIP7kORYE';
    if (mode == 'signup') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCKmcJ_uKL6JK0pF1xyqq0e0BMIP7kORYE';
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.actionPayoad.email,
        password: payload.actionPayoad.password,
        returnSecureToken: true
      })
    });
    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      const err = new Error(responseData.message || 'Failed to authenticate.');
      throw err;
    }
    const expiresIn = +responseData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;
    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(() => {
      context.dispatch('didLogout');
    }, expiresIn);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId
    });
  },

  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 1000) {
      return;
    }

    timer = setTimeout(function() {
      context.dispatch('didLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId
      });
    }
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    });
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');
    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null
    });
  },
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    });
  },
  didLogout(context) {
    context.dispatch('logout');
    context.commit('didLogout');
  }
};
