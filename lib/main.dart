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
// class MyApp extends StatelessWidget {
//   const MyApp({super.key});

//   // This widget is the root of your application.
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//         title: 'Flutter Demo',
//         theme: ThemeData(
//           primarySwatch: Colors.grey,
//         ),
//         home: Scaffold(
//           appBar: AppBar(
//             title: Text('Checkbox and Switch Example'),
//           ),
//           body: Column(
//             mainAxisAlignment: MainAxisAlignment.center,
//             children: [
//               login(),
            
//             ],
//           ),
//         ));
//   }
// }

class MyCheckboxWidget extends StatefulWidget {
  @override
  _MyCheckboxWidgetState createState() => _MyCheckboxWidgetState();
}

class _MyCheckboxWidgetState extends State<MyCheckboxWidget> {
  bool _isChecked = false;

  @override
  Widget build(BuildContext context) {
    return CheckboxListTile(
      title: Text('My Checkbox'),
      value: _isChecked,
      onChanged: (value) {
        setState(() {
          _isChecked = value!;
        });
      },
    );
  }
}

class MySwitchWidget extends StatefulWidget {
  @override
  _MySwitchWidgetState createState() => _MySwitchWidgetState();
}

class _MySwitchWidgetState extends State<MySwitchWidget> {
  bool _isOn = false;

  @override
  Widget build(BuildContext context) {
    return SwitchListTile(
      title: Text('My Switch'),
      value: _isOn,
      onChanged: (value) {
        setState(() {
          _isOn = value;
        });
      },
    );
  }
}

class MyButton extends StatelessWidget {
  final String text;

  const MyButton({required this.text});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {},
      child: Text(text),
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
                  child: Text("Log In", style: TextStyle(color: Colors.white)),
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

class whatsuppro extends StatelessWidget {
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

class whatsup extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          // _widgetCicularAvatar(),
          _widgetChatInfo(),
          _widgetCountInfo(),
        ],
      ),
    );
  }
}

Expanded _widgetCountInfo() {
  return Expanded(
      child: Column(children: [
    Text("10:45"),
    CircleAvatar(
      radius: 15,
      backgroundColor: Colors.green,
    )
    // SizedBox(height: 20,)
    //  Chip(label:  Text('5'),
    //   backgroundColor: Colors.green)
  ]));
}

Expanded _widgetChatInfo() {
  return Expanded(
    child: Column(children: [Text("Anne Jenkins"), Text("we're on our way")]),
  );
}

// Expanded _widgetCicularAvatar() {
// return Expanded(

// );
// }

class ClickThing extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Flutter Demo Home Page"),
        actions: [Icon(Icons.settings)],
      ),
      body: Container(
        width: double.infinity,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            ElevatedButton(
              onPressed: () {},
              child: Text("My Text"),
            ),
            OutlinedButton(
              onPressed: () {},
              child: Text("My Text"),
            ),
            TextButton(
              onPressed: () {},
              child: Text("My Text"),
            ),
            IconButton(
              onPressed: () {},
              icon: Icon(Icons.settings),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        tooltip: "Increment",
        child: const Text("Add"),
      ),
    );
  }
}

//video 3,4 from RetroPortal on youtube
class sections extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
      child: Container(
        height: 200,
        color: Colors.red,
        child: Row(
          //mainAxis in row is x axis
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          //cross axis in row is y axis
          crossAxisAlignment: CrossAxisAlignment.end,
          //by default the verticale direction is from top to the buttom
          //to alter this behavior there is another property(vertical dirction)
          verticalDirection: VerticalDirection.up,
          textDirection: TextDirection.rtl,

          children: <Widget>[
            MyButton(
              text: "button 1",
            ),
            MyButton(
              text: "button 2",
            ),
            MyButton(
              text: "button 3",
            ),
          ],
        ),
      ),
    ));
  }
}

class sections2 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
      child: Container(
        height: 200,
        color: Colors.red,
        width: 400,
        child: Column(
          //mainAxis in column is y axis
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          //cross axis in column is x axis
          crossAxisAlignment: CrossAxisAlignment.end,
          //by default the verticale direction is from top to the buttom
          //to alter this behavior there is another property(vertical dirction)
          verticalDirection: VerticalDirection.up,
          textDirection: TextDirection.rtl,

          children: <Widget>[
            MyButton(
              text: "button 1",
            ),
            MyButton(
              text: "button 2",
            ),
            MyButton(
              text: "button 3",
            ),
          ],
        ),
      ),
    ));
  }
}

//video 1,2 from RetroPortal on youtube
class anotherHome extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(child: Text("title")),
      ),
      body: Center(
          // heightFactor: 5, //multiply the height of the element by the heightfactor
          // widthFactor: 2,
          child: Container(
              // color: Colors.black,
              padding: const EdgeInsets.all(20),
              //------------------you can change by the transform : scale , rotation and also some dimentioational proreties of the container
              //------------------radians unit 0.5= 30 degress
              // transform: Matrix4.rotationZ(0.5),

              //-------------------constraint --> minmum and maximun dimentions for your container
              // constraints: BoxConstraints.expand() //---------takes all available width and height,
              // constraints: BoxConstraints(maxHeight:50 ,minHeight: 10, minWidth: 20 , maxWidth: 50  ),

              // alignment: Alignment.center,

              //------------ you either add the constraints or add the width and height
              // width: 400,
              // height: 500,

              //------------ decoration change shadow ,  shape , borders and box shadow
              //------------ you can't use color in the decoration and in the container at the same time
              decoration: BoxDecoration(
                  //----------box shadow take list so you can give multiple shadow to the container
                  boxShadow: [
                    BoxShadow(
                      color: Colors.blue,
                      blurRadius: 2.0,
                      spreadRadius: 2.0,
                    )
                  ],

                  //when using the colors in gradiant you don't have to put color in the decoration
                  gradient: LinearGradient(
                      end: Alignment.centerLeft,
                      begin: Alignment.centerRight,
                      colors: [Colors.red, Colors.yellow, Colors.white]),
                  // color: Colors.black,
                  border: Border.all(
                      color: Colors.red, width: 2.0, style: BorderStyle.solid),
                  // borderRadius: BorderRadius.all(Radius.circular(20.0)) ),

                  //------------- to use the shape removw border radius
                  shape: BoxShape.circle),
              child: Text("hello world",
                  style: TextStyle(fontSize: 28, color: Colors.red)))),
      floatingActionButton: (Text("add")),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
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