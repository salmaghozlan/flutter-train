import 'package:flutter/material.dart';

class MyArab2Widget extends StatefulWidget {
  @override
  _MyArab2WidgetState createState() => _MyArab2WidgetState();
}

class _MyArab2WidgetState extends State<MyArab2Widget> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromARGB(255, 201, 194, 194),
      body: Container(
          child: Directionality(
        textDirection: TextDirection.rtl,
        child: Column(children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Column(
                children: [
                  Container(
                      decoration: BoxDecoration(
                          border: Border.all(
                              style: BorderStyle.solid,
                              color: Color(0xff27C5E8)),
                          shape: BoxShape.circle),
                      child: CircleAvatar(
                          radius: 20, child: Icon(Icons.wb_sunny_outlined))),
                  Text("نشر الغسيل")
                ],
              ),
              SizedBox(
                width: 20,
              ),
              Column(
                children: [
                  Container(
                      decoration: BoxDecoration(
                          border: Border.all(
                              style: BorderStyle.solid,
                              color: Color(0xff27C5E8)),
                          shape: BoxShape.circle),
                      child: CircleAvatar(child: Icon(Icons.run_circle))),
                  Text("الرياضة الخارجية")
                ],
              ),
              SizedBox(
                width: 20,
              ),
              Column(
                children: [
                  Container(
                      decoration: BoxDecoration(
                          border: Border.all(
                              style: BorderStyle.solid,
                              color: Color(0xff27C5E8)),
                          shape: BoxShape.circle),
                      child: CircleAvatar(
                          child: Icon(Icons.local_car_wash_outlined))),
                  Text("غسيل السيارات")
                ],
              ),
            ],
          ),
          SizedBox(
                height: 20,
              ),
          ListTile(
            title: Text("الطقس لأربعة عشر يوما",
                style: TextStyle(fontWeight: FontWeight.w500, fontSize: 16)),
            subtitle: Text("المقابلين - 934م عن سطح البحر"),
            trailing: Icon(Icons.ios_share , color: Color(0xff27C5E8),),
          ),
          ListTile(
            leading: Column(children: [
              Text(
                "03/11",
                style: TextStyle(color: Colors.grey, fontSize: 12),
              ),
              Text("السبت",
                  style: TextStyle(fontWeight: FontWeight.w500, fontSize: 16)),
              SizedBox(
                width: 20,
              ),
            ]),
            title: Row(
              children: [
                Image.asset(
                  "assets/icons/Asset 4.png",
                  width: 20,
                ),
                SizedBox(
                  width: 40,
                ),
                Text("22\u00B0"),
                SizedBox(
                  width: 40,
                ),
                Image.asset(
                  "assets/icons/Asset 16.png",
                  width: 30,
                ),
                SizedBox(
                  width: 10,
                ),
                Text("12\u00B0"),
                SizedBox(
                  width: 10,
                ),
              ],
            ),
            trailing: Icon(Icons.arrow_drop_down_sharp ,  color: Color(0xff27C5E8)),
          ),
          Divider(
            color: Color(0xff6B6B6B),
          ),
          ListTile(
            leading: Column(children: [
              Text(
                "03/12",
                style: TextStyle(color: Colors.grey, fontSize: 12),
              ),
              Text("الاحد",
                  style: TextStyle(fontWeight: FontWeight.w500, fontSize: 16)),
              SizedBox(
                width: 20,
              ),
            ]),
            title: Row(
              children: [
                Image.asset(
                  "assets/icons/Asset 4.png",
                  width: 20,
                ),
                SizedBox(
                  width: 40,
                ),
                Text("22\u00B0"),
                SizedBox(
                  width: 40,
                ),
                Image.asset(
                  "assets/icons/Asset 14.png",
                  width: 15,
                ),
                SizedBox(
                  width: 25,
                ),
                Text("14\u00B0"),
                SizedBox(
                  width: 40,
                ),
              ],
            ),
            trailing: Icon(Icons.arrow_drop_down_sharp, color: Color(0xff27C5E8)),
          ),
          Divider(
            color: Color(0xff6B6B6B),
          ),
          ListTile(
            leading: Column(children: [
              Text(
                "03/13",
                style: TextStyle(color: Colors.grey, fontSize: 12),
              ),
              Text("الاثنين",
                  style: TextStyle(fontWeight: FontWeight.w500, fontSize: 16)),
              SizedBox(
                width: 15,
              ),
            ]),
            title: Row(
              children: [
                Image.asset(
                  "assets/icons/Asset 4.png",
                  width: 20,
                ),
                SizedBox(
                  width: 40,
                ),
                Text("20\u00B0"),
                SizedBox(
                  width: 30,
                ),
                Image.asset(
                  "assets/icons/Asset 9.png",
                  width: 30,
                ),
                SizedBox(
                  width: 20,
                ),
                Text("11\u00B0"),
                SizedBox(
                  width: 40,
                ),
              ],
            ),
            trailing: Icon(Icons.arrow_drop_down_sharp, color: Color(0xff27C5E8)),
          ),
          Divider(
            color: Color(0xff6B6B6B),
          ),
          ListTile(
            leading: Column(children: [
              Text(
                "03/14",
                style: TextStyle(color: Colors.grey, fontSize: 12),
              ),
              Text("الثلاثاء",
                  style: TextStyle(fontWeight: FontWeight.w500, fontSize: 16)),
              SizedBox(
                width: 15,
              ),
            ]),
            title: Row(
              children: [
                Image.asset(
                  "assets/icons/Asset 10.png",
                  width: 20,
                ),
                SizedBox(
                  width: 40,
                ),
                Text("14\u00B0"),
                SizedBox(
                  width: 30,
                ),
                Image.asset(
                  "assets/icons/Asset 13.png",
                  width: 30,
                ),
                SizedBox(
                  width: 20,
                ),
                Text("8\u00B0"),
                SizedBox(
                  width: 50,
                ),
              ],
            ),
            trailing: Icon(Icons.arrow_drop_down_sharp , color: Color(0xff27C5E8)),
          ),
          Divider(
            color: Color(0xff6B6B6B),
          ),
          ListTile(
            leading: Column(children: [
              Text(
                "03/15",
                style: TextStyle(color: Colors.grey, fontSize: 12),
              ),
              Text("الاربعاء",
                  style: TextStyle(fontWeight: FontWeight.w500, fontSize: 16)),
              SizedBox(
                width: 15,
              ),
            ]),
            title: Row(
              children: [
                Image.asset(
                  "assets/icons/Asset 13.png",
                  width: 20,
                ),
                SizedBox(
                  width: 40,
                ),
                Text("11\u00B0"),
                SizedBox(
                  width: 30,
                ),
                Image.asset(
                  "assets/icons/Asset 16.png",
                  width: 30,
                ),
                SizedBox(
                  width: 20,
                ),
                Text("8\u00B0"),
                SizedBox(
                  width: 50,
                ),
              ],
            ),
            trailing: Icon(Icons.arrow_drop_down_sharp, color: Color(0xff27C5E8)),
          ),
          Divider(
            color: Color(0xff6B6B6B),
          ),
          ListTile(
            leading: Column(children: [
              Text(
                "03/16",
                style: TextStyle(color: Colors.grey, fontSize: 12),
              ),
              Text("الخميس",
                  style: TextStyle(fontWeight: FontWeight.w500, fontSize: 16)),
            ]),
            title: Row(
              children: [
                Image.asset(
                  "assets/icons/Asset 8.png",
                  width: 20,
                ),
                SizedBox(
                  width: 30,
                ),
                Text("15\u00B0"),
                SizedBox(
                  width: 30,
                ),
                Image.asset(
                  "assets/icons/Asset 14.png",
                  width: 15,
                ),
                SizedBox(
                  width: 30,
                ),
                Text("10\u00B0"),
                SizedBox(
                  width: 45,
                ),
              ],
            ),
            trailing: Icon(Icons.arrow_drop_down_sharp, color: Color(0xff27C5E8)),
          ),
          Divider(
            color: Color(0xff6B6B6B),
          ),
          ListTile(
            leading: Column(children: [
              Text(
                "03/17",
                style: TextStyle(color: Colors.grey, fontSize: 12),
              ),
              Text("الجمعة",
                  style: TextStyle(fontWeight: FontWeight.w500, fontSize: 16)),
            ]),
            title: Row(
              children: [
                Image.asset(
                  "assets/icons/Asset 8.png",
                  width: 20,
                ),
                SizedBox(
                  width: 30,
                ),
                Text("18\u00B0"),
                SizedBox(
                  width: 30,
                ),
                Image.asset(
                  "assets/icons/Asset 13.png",
                  width: 20,
                ),
                SizedBox(
                  width: 40,
                ),
                Text("9\u00B0"),
                SizedBox(
                  width: 50,
                ),
              ],
            ),
            trailing: Icon(Icons.arrow_drop_down_sharp, color: Color(0xff27C5E8)),
          ),
        ]),
      )),
    );
  }
}
