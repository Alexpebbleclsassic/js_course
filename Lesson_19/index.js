const checkAuth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ isAuth: true});
    }, 2000);
  });
}
  

  const getUser = (authInfo) => {
    return new Promise((resolve, reject) => {
    if (!authInfo.isAuth) {
      reject(null);
      return;
    }
  
    setTimeout(() => {
      resolve( {name: 'Max'} );
    }, 2000);
  });
}

checkAuth()
    .then((res) => {
      console.log('=================');
      console.log('first then');
      console.log('=================');
      return getUser(res);
    })
    .then((res) => {
      console.log('=================');
      console.log('second then');
      console.log(res);      
      console.log('=================');
      
    });





    // <-- HOME -->
// const checkAuth = (callback) => {
//   setTimeout(() => {
//     callback( {isAuth: true} );
//   }, 2000);
// };

// const getUser = (authInfo, callback) => {
//   if (!authInfo.isAuth) {
//     reject(null);
//     return;
//   }



     // <-- MY --->
// const promise = (callback) => {
//     setTimeout(() => {
//       callback({isAuth: true}) => resolve(true);
//     }, 2000);
//   };
//   promise
//   .then {
//     result => {console.log("OK")},
//     error => {console.log("BAD")}
//   }
//   callback()
//   console.log(callback);

//   const getUser = (authInfo, callback) => {
//     if (!authInfo.isAuth) {
//       reject(null);
//       return;
//     }
//     setTimeout(() => {
//       callback( {name: 'Max'} );
//     }, 2000);
//   };
  
  
//   checkAuth((authInfo) => {
//     getUser(authInfo, (user) => {
//       console.log(user.name);
//     });
//   });
  
  
  