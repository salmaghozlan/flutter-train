import 'dart:math';
import 'package:flutter/material.dart';
import 'screen1.dart';
import 'screen2.dart';
import 'screen3.dart';
import 'screen4.dart';
import 'navlogin.dart';
import 'register.dart';
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
      // home: MyArab2Widget(),
      // home: MyArabWidget(),
      // home: linkedInWidget(),
      // home: AmazonWidget(),
      home:RegisterPage() ,
    );
  }
}
