import 'package:flutter/material.dart';

class linkedInWidget extends StatefulWidget {
  @override
  _linkedInWidgetState createState() => _linkedInWidgetState();
}

class _linkedInWidgetState extends State<linkedInWidget> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      child: Column(mainAxisAlignment: MainAxisAlignment.end, children: [
        ListTile(
          leading: Container(
            width: 60,
            height: 70,
            decoration: BoxDecoration(
              shape: BoxShape.rectangle,
              image: DecorationImage(
                image: AssetImage('assets/images/profile5.jpg'),
              ),
            ),
          ),
          title: Text.rich(
            TextSpan(
              children: [
                TextSpan(
                  text: 'pariatur tempor',
                  style: TextStyle(
                    fontWeight: FontWeight.normal,
                  ),
                ),
                TextSpan(
                  text:
                      '. Cupidatat adipisicing ut et dolore anim Lorem deserunt.',
                  style: TextStyle(
                    fontWeight: FontWeight.normal,
                  ),
                ),
              ],
              text: 'Fugiat sunt ',
              style: TextStyle(
                fontSize: 16,
                color: Colors.black,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          trailing: Column(children: [
            Text(
              "2d",
              style: TextStyle(color: Colors.grey),
            ),
            Icon(Icons.more_horiz),
          ]),
        ),
        Divider(
          color: Color(0xff6B6B6B),
        ),
        ListTile(
          leading: Container(
            width: 60,
            height: 70,
            decoration: BoxDecoration(
              shape: BoxShape.rectangle,
              image: DecorationImage(
                image: AssetImage('assets/images/profile4.jpg'),
              ),
            ),
          ),
          title: Text.rich(
            TextSpan(
              children: [
                TextSpan(
                  text: 'pariatur tempor',
                  style: TextStyle(
                    fontWeight: FontWeight.normal,
                  ),
                ),
                TextSpan(
                  text:
                      '. Cupidatat adipisicing ut et dolore anim Lorem deserunt.',
                  style: TextStyle(
                    fontWeight: FontWeight.normal,
                  ),
                ),
              ],
              text: 'Fugiat sunt ',
              style: TextStyle(
                fontSize: 16,
                color: Colors.black,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          trailing: Column(children: [
            Text(
              "2d",
              style: TextStyle(color: Colors.grey),
            ),
            Icon(Icons.more_horiz),
          ]),
        ),
        Divider(
          color: Color(0xff6B6B6B),
        ),
        ListTile(
          leading: Container(
            width: 60,
            height: 70,
            decoration: BoxDecoration(
              shape: BoxShape.rectangle,
              image: DecorationImage(
                image: AssetImage('assets/images/profile6.jfif'),
              ),
            ),
          ),
          title: Text.rich(
            TextSpan(
              text: 'Fugiat sunt deserunt ',
              style: TextStyle(
                fontSize: 16,
                color: Colors.black,
              ),
              children: [
                TextSpan(
                  text:
                      'pariatur tempor. Cupidatat adipisicing ut et dolore anim',
                ),
                TextSpan(
                  text: ' Lorem deserunt.',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
          ),
          trailing: Column(children: [
            Text(
              "2d",
              style: TextStyle(color: Colors.grey),
            ),
            Icon(Icons.more_horiz),
          ]),
        ),
        Divider(
          color: Color(0xff6B6B6B),
        ),
        ListTile(
          leading: Container(
            width: 60,
            height: 70,
            decoration: BoxDecoration(
              shape: BoxShape.rectangle,
              image: DecorationImage(
                image: AssetImage('assets/images/orange.png'),
              ),
            ),
          ),
          title: Text.rich(
            TextSpan(
              text: 'Fugiat sunt deserunt ',
              style: TextStyle(
                fontSize: 16,
                color: Colors.black,
              ),
              children: [
                TextSpan(
                  text: 'pariatur tempor',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                TextSpan(
                  text:
                      '. Cupidatat adipisicing ut et dolore anim Lorem deserunt.',
                ),
              ],
            ),
          ),
          trailing: Column(children: [
            Text(
              "2d",
              style: TextStyle(color: Colors.grey),
            ),
            Icon(Icons.more_horiz),
          ]),
        ),
        Divider(
          color: Color(0xff6B6B6B),
        ),
        ListTile(
          leading: Container(
            width: 60,
            height: 70,
            decoration: BoxDecoration(
              shape: BoxShape.rectangle,
              image: DecorationImage(
                image: AssetImage('assets/images/profile_picture.jpg'),
              ),
            ),
          ),
          title: Text.rich(
            TextSpan(
              text: 'Fugiat sunt deserunt ',
              style: TextStyle(
                fontSize: 16,
                color: Colors.black,
              ),
              children: [
                TextSpan(
                  text: 'pariatur tempor',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                TextSpan(
                  text:
                      '. Cupidatat adipisicing ut et dolore anim Lorem deserunt.',
                ),
              ],
            ),
          ),
          trailing: Column(children: [
            Text(
              "2d",
              style: TextStyle(color: Colors.grey),
            ),
            Icon(Icons.more_horiz),
          ]),
        ),
        Divider(
          color: Color(0xff6B6B6B),
        ),
        ListTile(
          leading: Container(
            width: 60,
            height: 70,
            decoration: BoxDecoration(shape: BoxShape.circle),
            child: Stack(
              children: [
                Positioned(
                  left: 8,
                  top: 8,
                  child: CircleAvatar(
                    radius: 15,
                    backgroundImage: AssetImage("assets/images/profile2.jpeg"),
                  ),
                ),
                Positioned(
                  right: 8,
                  bottom: 8,
                  child: CircleAvatar(
                    radius: 15,
                    backgroundImage: AssetImage("assets/images/profile3.jpg"),
                  ),
                ),
              ],
            ),
          ),
          title: Text.rich(
            TextSpan(
              text: 'Fugiat sunt ',
              style: TextStyle(
                fontSize: 16,
                color: Colors.black,
                fontWeight: FontWeight.bold,
              ),
              
              children: [
                TextSpan(
                  text: 'and',
                  style: TextStyle(
                    fontWeight: FontWeight.normal,
                  ),),
                TextSpan(
                  text:
                      ' pariatur tempor.',
                ),
                TextSpan(
                  text: ' Lorem deserunt. Cupidatat adipisicing ut et dolore anim',
                  style: TextStyle(
                    fontWeight: FontWeight.normal,
                  ),
                ),
              ],
            ),
          ),
          trailing: Column(children: [
            Text(
              "3d",
              style: TextStyle(color: Colors.grey),
            ),
            Icon(Icons.more_horiz),
          ]),
        ),
        Divider(
          color: Color(0xff6B6B6B),
        ),
        ListTile(
          leading: Container(
              width: 60,
              height: 70,
              decoration: BoxDecoration(shape: BoxShape.circle),
              child: CircleAvatar(
                radius: 15,
                backgroundImage: AssetImage("assets/images/profile2.jpeg"),
              )),
          title: Text.rich(
            TextSpan(
              text: 'Fugiat sunt deserunt ',
              style: TextStyle(
                fontSize: 16,
                color: Colors.black,
              ),
              children: [
                TextSpan(
                  text: 'pariatur tempor',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                TextSpan(
                  text:
                      '. Cupidatat adipisicing ut et dolore anim Lorem deserunt.',
                ),
              ],
            ),
          ),
          trailing: Column(children: [
            Text(
              "3d",
              style: TextStyle(color: Colors.grey),
            ),
            Icon(Icons.more_horiz),
          ]),
        ),
        Divider(
          color: Color(0xff6B6B6B),
        ),
      ]),
    ));
  }
}
