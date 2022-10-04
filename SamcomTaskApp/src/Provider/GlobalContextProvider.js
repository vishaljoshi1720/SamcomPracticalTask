import React, {createContext, useMemo, useReducer} from 'react';

//for flowing data in all over the app
export const GlobalContext = createContext();

export const GlobalContextProvider = props => {
  const initialState = {
    isLogin: false,
    user: null,
    token: null,
    userList: [],
    pageSize: null,
  };
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          user: action.user,
          token: action.token,
          isLogin: true,
        };
      case 'GET_USER_LIST':
        return {
          ...prevState,
          userList: action.userList,
          pageSize: action.pageSize,
        };
    }
  };
  //managing state
  const [state, dispatch] = useReducer(reducer, initialState);

  //caching the function valus
  const userActions = useMemo(
    () => ({
      Login: async formData => {
        var header_data = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        };

        try {
          const response = await fetch(
            'https://reqres.in/api/users',
            header_data,
          );

          return response.json();
        } catch (error) {
          throw error;
        }
      },
      GetUsers: async () => {
        var header_data = {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        };
        try {
          const response = await fetch(
            'https://reqres.in/api/users',
            header_data,
          );
          return response.json();
        } catch (error) {
          throw error;
        }
      },
    }),

    [],
  );

  return (
    <GlobalContext.Provider value={{state, dispatch, userActions}}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const withGlobalContext = ChildComponent => props =>
  (
    <GlobalContext.Consumer>
      {context => <ChildComponent {...props} global={context} />}
    </GlobalContext.Consumer>
  );
