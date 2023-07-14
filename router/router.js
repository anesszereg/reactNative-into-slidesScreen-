// import SignInScreen from '../screens/SignIn/SignIn.jsx'
// import SignUpScreen from '../screens/SignUp/SignUp.jsx'
// import ForgetPasswordScreen from '../screens/ForgetPwd/ForgetPassword.jsx'
import LoginPage from '../screens/Login/Login '
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'



const authStuck = createStackNavigator({

    Login:{
        screen: LoginPage,
        
    }



    
    
    
    
    
    // SignIn: {
    //     screen: SignInScreen,
    //     navigationOptions: {
    //         headerShown: false
    //     }
    // },
    // SignUp: {
    //     screen: SignUpScreen,
    //     navigationOptions: {
    //         headerShown: false
    //     }
    // },
    // ForgetPassword: {
    //     screen: ForgetPasswordScreen,
    //     navigationOptions: {
    //         headerTitle:'back',
         
    //         headerBackTitle: 'back',
    //         headerTitleAlign:'left',
    //         headerBackTitleStyle:{
    //             fontWeight:'bold'
    //         },
    //         headerTintColor:'#eee',
    //         headerStyle:{
    //          backgroundColor:'#ff0000'   
    //         }

    //     }
    // }
    // ,



})

const router = createAppContainer(authStuck)

export default router ;