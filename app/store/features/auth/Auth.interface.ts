export interface AuthState {
  isAuth: boolean;
}

// Define the initial state using that type
export const AuthInitialState: AuthState = {
  isAuth: false,
};
