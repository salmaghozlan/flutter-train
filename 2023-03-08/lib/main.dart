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
      home: login(),
    );
  }
}



class login extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.blue[900],
        body: Container(
          padding: EdgeInsets.symmetric(horizontal: 20),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Center(
                  child: (Text(
                "facebook",
                style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 40),
              ))),
              SizedBox(
                height: 20,
              ),
              Card(
                child: Column(children: [
                  TextFormField(
                      decoration: InputDecoration(
                          border: OutlineInputBorder(),
                          labelText: ("Email or phone number"))),
                  TextFormField(
                      decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    labelText: ("Password"),
                  )),
                ]),
              ),
              ElevatedButton(
                  onPressed: () {},
                  child: Text("Log In", style: TextStyle(
                    color: Colors.white)
                ),
                  style: ButtonStyle(
                    backgroundColor: MaterialStateProperty.all<Color>(
                      Color.fromARGB(0, 63, 111, 150),
                    ),
                    minimumSize: MaterialStateProperty.all<Size>(Size(310, 50)),
                  )),
            ],
          ),
        ));
  }
}

class post extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Flutter Demo Home Page"),
          actions: [Icon(Icons.settings)],
        ),
        body: SizedBox(
          width: double.infinity,
          height: null,
          child: Card(
            child: Column(
              // mainAxisAlignment: MainAxisAlignment.center,

              children: [
                Container(
                  child: ListTile(
                    leading: CircleAvatar(
                      backgroundImage:
                          AssetImage('assets/images/profile_picture.jpg'),
                    ),
                    title: Text("Salma Ghozlan",
                        style: TextStyle(fontWeight: FontWeight.bold)),
                    subtitle: Row(children: [
                      Text("just now •Amman ",
                          style: (TextStyle(color: Colors.grey))),
                      Icon(Icons.settings_applications_sharp,
                          color: Colors.grey, size: 20),
                      Icon(
                        Icons.arrow_drop_down_sharp,
                        color: Colors.grey,
                      )
                    ]),
                    trailing: Icon(Icons.more_horiz),
                  ),
                ),
                Container(
                    padding: EdgeInsets.only(left: 15),
                    alignment: Alignment.topLeft,
                    child: Text("this looks awesome!")),
                SizedBox(height: 5),
                Card(
                  child: Container(
                    height: 200, // set a fixed height for the container
                    width: double.infinity,
                    decoration: const BoxDecoration(
                      image: DecorationImage(
                        image: AssetImage('assets/images/food.jfif'),
                        fit: BoxFit
                            .cover, // Set the image to cover the entire container
                      ),
                    ),
                  ),
                ),
                SizedBox(height: 10),
                Card(
                  child: ListTile(
                    title: Text(
                      "Super awsome cheese box!",
                      style: TextStyle(
                          fontWeight: FontWeight.w500,
                          fontStyle: FontStyle.italic),
                    ),
                    subtitle: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: const [
                          SizedBox(height: 10),
                          Text(
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!"),
                          SizedBox(height: 15),
                          Text(
                            "GRAND.NET",
                            style: TextStyle(fontSize: 10),
                          )
                        ]),
                  ),
                ),
                Card(
                  child: Container(
                    padding: EdgeInsets.only(left: 15),
                    child: Row(
                      children: [
                        const Icon(
                          Icons.thumb_up,
                          color: Colors.grey,
                        ),
                        TextButton(
                          onPressed: () {},
                          child: const Text("Like"),
                        ),
                        const Icon(
                          Icons.mode_comment_outlined,
                          color: Colors.grey,
                        ),
                        TextButton(
                          onPressed: () {},
                          child: const Text("Comment"),
                        ),
                        const Icon(
                          Icons.screen_share_outlined,
                          color: Colors.grey,
                        ),
                        TextButton(
                          onPressed: () {},
                          child: const Text("Share"),
                        )
                      ],
                    ),
                  ),
                ),
                SizedBox(height: 15),
                Container(
                  padding: const EdgeInsets.only(left: 15),
                  child: Row(
                    children: const [
                      CircleAvatar(
                          backgroundColor: Colors.blue,
                          radius: 10,
                          child: Icon(
                            Icons.thumb_up,
                            color: Colors.white,
                            size: 10,
                          )),
                      Padding(padding: EdgeInsets.only(left: 5)),
                      Text(
                        "maya",
                        style: TextStyle(color: Colors.blue),
                      )
                    ],
                  ),
                ),
                SizedBox(height: 15),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Expanded(
                      flex: 2,
                      child: CircleAvatar(
                        backgroundImage:
                            AssetImage('assets/images/profile_picture.jpg'),
                      ),
                    ),
                    Expanded(
                      flex: 8,
                      child: Container(
                        padding: EdgeInsets.only(right: 10),
                        child: TextFormField(
                          decoration: InputDecoration(
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(25.0),
                            ),
                            labelText: "Comment...",
                            labelStyle: TextStyle(fontSize: 14.0),
                            suffixIcon: Container(
                              padding: EdgeInsets.only(right: 10),
                              child: Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  Icon(
                                    Icons.emoji_emotions_outlined,
                                    color: Colors.grey,
                                  ),
                                  Icon(
                                    Icons.camera_alt_outlined,
                                    color: Colors.grey,
                                  ),
                                  Icon(
                                    Icons.gif_box,
                                    color: Colors.grey,
                                  ),
                                  Icon(
                                    Icons.image,
                                    color: Colors.grey,
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                )
              ],
            ),
          ),
        ));
  }
}





