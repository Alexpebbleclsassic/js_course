const promise = (callback) => {
    setTimeout(() => {
      callback({isAuth: true}) => resolve(true);
    }, 2000);
  };
  promise
  .then {
    result => {console.log("OK")},
    error => {console.log("BAD")}
  }
  callback()
  console.log(callback);

  const getUser = (authInfo, callback) => {
    if (!authInfo.isAuth) {
      reject(null);
      return;
    }
    setTimeout(() => {
      callback( {name: 'Max'} );
    }, 2000);
  };
  
  
  checkAuth((authInfo) => {
    getUser(authInfo, (user) => {
      console.log(user.name);
    });
  });
  
  
  