import 'dart:math';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.grey,
      ),
      home: formRegster(),
    );
  }
}

class formRegster extends StatelessWidget {
  final _keyForm = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: EdgeInsets.all(0.8),
        child: Container(
          padding: EdgeInsets.symmetric(horizontal: 10.0),
            child: Form(
          key: _keyForm,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              TextFormField(
                enabled: true,
                keyboardType: TextInputType.name,
                validator: (value) {
                  if (value == null || value.length < 8) {
                    return "please enter a valid full name";
                  }
                  return null;
                },
                decoration: const InputDecoration(
                    hintText: "full name",
                    icon: Icon(Icons.people),
                    labelText: "full name",
                    border: OutlineInputBorder()),
              ),
              SizedBox(
                height: 10,
              ),
              TextFormField(
                enabled: true,
                keyboardType: TextInputType.emailAddress,
                validator: (value) {
                  if (value == null || value.length < 8) {
                    return "please enter a valid full name";
                  }
                  return null;
                },
                decoration: const InputDecoration(
                    hintText: "email",
                    icon: Icon(Icons.email),
                    labelText: "email",
                    border: OutlineInputBorder()),
              ),
              SizedBox(
                height: 10,
              ),
              TextFormField(
                enabled: true,
                keyboardType: TextInputType.streetAddress,
                validator: (value) {
                  if (value == null || value.length < 8) {
                    return "please enter a valid address";
                  }
                  return null;
                },
                decoration: const InputDecoration(
                    hintText: "address",
                    icon: Icon(Icons.location_city),
                    labelText: "address",
                    border: OutlineInputBorder()),
              ),
                 ElevatedButton(
            onPressed: () {
              if (_keyForm.currentState?.validate()== true) {
                // Form is valid, perform submission
              }
            },
            child: Text('Submit'),
          ),
            ],
          ),
        )),
      ),
    );
  }
}


