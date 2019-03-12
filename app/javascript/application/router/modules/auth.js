import Index from '../../views/auth/Index';
import SignIn from '../../views/auth/SignIn';
import SignUp from '../../views/auth/SignUp';

export default [
  {
    path: '/auth',
    name: 'AuthIndex',
    component: Index,
    children: [
      {
        path: 'sign_in',
        name: 'AuthSignIn',
        component: SignIn,
      },
      {
        path: 'sign_up',
        name: 'AuthSignUp',
        component: SignUp,
      },
    ],
  },
]
