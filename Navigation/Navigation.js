import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import Colors from '../constants/Colors'
import signUp2 from '../screens/User/signUp2'
import signUp1 from '../screens/Social/signUp1';
import signUp3 from '../screens/Trans/signUp3';
import signUp4 from '../screens/Club/signUp4';
import Main from '../screens/Main'
import LoginV2 from '../screens/LoginV2'



const AppNavigator = createStackNavigator({
    Main:{ screen: Main ,headerTitle: 'EAR ME'},
    LoginV2:{ screen: LoginV2 ,headerTitle: 'EAR ME'},
    signUp1:{ screen: signUp1 ,headerTitle: 'EAR ME'},
    signUp2:{ screen: signUp2 ,headerTitle: 'EAR ME'},
    signUp3:{ screen: signUp3 ,headerTitle: 'EAR ME'},
    signUp4:{ screen: signUp4 ,headerTitle: 'EAR ME'},
},
{
    defaultNavigationOptions : {
        headerTitleAlign: 'center',
        //headerTitle: 'Ear Me',
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintColor: Colors.title
    }
}
);

export default createAppContainer(AppNavigator);