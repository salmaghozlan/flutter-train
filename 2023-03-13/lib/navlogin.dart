import 'package:flutter/material.dart';
import 'package:email_validator/email_validator.dart';

class MyFirstWidget extends StatefulWidget {
  @override
  _MyFirstWidgetState createState() => _MyFirstWidgetState();
}

class _MyFirstWidgetState extends State<MyFirstWidget> {
  bool obscureText = true;
  final _keyForm = GlobalKey<FormState>();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        resizeToAvoidBottomInset: false,
        appBar: AppBar(
          title: Text("login page"),
        ),
        body: Padding(
          padding: EdgeInsets.all(16.0),
          child: Form(
            key: _keyForm,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                FlutterLogo(size: 100,),
                TextFormField(
                  controller: emailController,
                  keyboardType: TextInputType.emailAddress,
                  validator: (value) {
                    if(value == null || value.isEmpty || !EmailValidator.validate(value)){
                      return "please enter an email address";
                    }
                    return null ; 
                  },
                  decoration: InputDecoration(
                    hintText: "example@john.com",
                    prefixIcon: Icon(Icons.email),
                  ),
                ),
                                TextFormField(
                  controller: passwordController,
                  keyboardType: TextInputType.text,
                  validator: (value) {
                    if(value == null || value.isEmpty ){
                      return "please enter a password";
                    }
                    return null ; 
                  },
                  decoration: InputDecoration(
                    hintText: "***",
                    prefixIcon: Icon(Icons.remove_red_eye),
                  ),
                ),
                
                 SizedBox(
                  width: double.infinity,
                   child: ElevatedButton(
                    onPressed: () {},
                    child: Text("Log In", style: TextStyle(color: Colors.white)),
                    style: ButtonStyle(
                      backgroundColor: MaterialStateProperty.all<Color>(
                        Color.fromARGB(0, 63, 111, 150),  
                      ),
                    )),
                 ),
              ],),
          ),
        ));
  }
}
