import 'package:flutter/material.dart';

class MyArabWidget extends StatefulWidget {
  @override
  _MyArabWidgetState createState() => _MyArabWidgetState();
}

class _MyArabWidgetState extends State<MyArabWidget> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: Directionality(
          textDirection: TextDirection.rtl,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            // crossAxisAlignment: CrossAxisAlignment.start,
            children: [ Divider(
                color: Color(0xff6B6B6B),
              ),
              
              Container(
                // height: 100,
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      ListTile(
                        leading: CircleAvatar(
                          backgroundImage:
                              AssetImage('assets/images/profile_picture.jpg'),
                        ),
                        title: Text(
                          "تسجيل الدخول",
                          style: TextStyle(
                              color: Color(0xff27C5E8),
                              fontWeight: FontWeight.w900),
                        ),
                        trailing: Icon(Icons.keyboard_arrow_left_outlined),
                      ),
                    ]),
              ),
               Divider(
                color: Color(0xff6B6B6B),
              ),
               Divider(
                color: Color(0xff6B6B6B),
              ),
              
              ListTile(
                leading: Container(
                  decoration: BoxDecoration(
                      border: Border.all(
                          style: BorderStyle.solid, color: Color(0xff27C5E8)),
                      shape: BoxShape.circle),
                  child: CircleAvatar(
                      radius: 15,
                      child: Icon(Icons.settings, color: Color(0xff27C5E8))),
                ),
                title: Text("الاعدادات"),
                trailing: Icon(Icons.keyboard_arrow_left_outlined,
                    color: Color(0xff27C5E8)),
              ),
              Divider(
                color: Color(0xff6B6B6B),
              ),
              Divider(
                color: Color(0xff6B6B6B),
              ),
              ListTile(
                leading: Container(
                    decoration: BoxDecoration(
                        border: Border.all(
                            style: BorderStyle.solid, color: Color(0xff27C5E8)),
                        shape: BoxShape.circle),
                    child: CircleAvatar(
                        radius: 15,
                        child: Icon(Icons.attach_money_sharp,
                            color: Color(0xff27C5E8)))),
                title: Text("الاشتراك"),
                trailing: Icon(Icons.keyboard_arrow_left_outlined,
                    color: Color(0xff27C5E8)),
              ),
              Divider(
                color: Color(0xff6B6B6B),
              ),
              Divider(
                color: Color(0xff6B6B6B),
              ),
              ListTile(
                leading: Container(
                    decoration: BoxDecoration(
                        border: Border.all(
                            style: BorderStyle.solid, color: Color(0xff27C5E8)),
                        shape: BoxShape.circle),
                    child: CircleAvatar(
                        radius: 15,
                        child: Icon(Icons.info, color: Color(0xff27C5E8)))),
                title: Text("عن التطبيق"),
                trailing: Icon(Icons.keyboard_arrow_left_outlined,
                    color: Color(0xff27C5E8)),
              ),
              Divider(
                color: Color(0xff6B6B6B),
              ),
              Divider(
                color: Color(0xff6B6B6B),
              ),
              ListTile(
                leading: Container(
                  decoration: BoxDecoration(
                      border: Border.all(
                          style: BorderStyle.solid, color: Color(0xff27C5E8)),
                      shape: BoxShape.circle),
                  child: CircleAvatar(
                      radius: 15,
                      child:
                          Icon(Icons.error_outlined, color: Color(0xff27C5E8))),
                ),
                title: Text("بلغ عن مشكلة"),
                trailing: Icon(Icons.keyboard_arrow_left_outlined,
                    color: Color(0xff27C5E8)),
              ),
              Divider(
                color: Color(0xff6B6B6B),
              ),
              Divider(
                color: Color(0xff6B6B6B),
              ),
              ListTile(
                leading: Container(
                  decoration: BoxDecoration(
                      border: Border.all(
                          style: BorderStyle.solid, color: Color(0xff27C5E8)),
                      shape: BoxShape.circle),
                  child: CircleAvatar(
                      radius: 15,
                      child: Icon(Icons.stars, color: Color(0xff27C5E8))),
                ),
                title: Text("قيم التطبيق"),
                trailing: Icon(Icons.keyboard_arrow_left_outlined,
                    color: Color(0xff27C5E8)),
              ),
              Divider(
                color: Color(0xff6B6B6B),
              ),
              Divider(
                color: Color(0xff6B6B6B),
              ),
              ListTile(
                leading: Container(
                  decoration: BoxDecoration(
                      border: Border.all(
                          style: BorderStyle.solid, color: Color(0xff27C5E8)),
                      shape: BoxShape.circle),
                  child: CircleAvatar(
                      radius: 15,
                      child: Icon(Icons.ios_share, color: Color(0xff27C5E8))),
                ),
                title: Text("انشر التطبيق"),
                trailing: Icon(Icons.keyboard_arrow_left_outlined,
                    color: Color(0xff27C5E8)),
              ),
              Divider(
                color: Color(0xff6B6B6B),
              ),
              Divider(
                color: Color(0xff6B6B6B),
              ),
              ListTile(
                leading: Container(
                    decoration: BoxDecoration(
                        border: Border.all(
                            style: BorderStyle.solid, color: Color(0xff27C5E8)),
                        shape: BoxShape.circle),
                    child: CircleAvatar(
                        radius: 15,
                        child: Icon(Icons.campaign, color: Color(0xff27C5E8)))),
                title: Text("اعلن عنه"),
                trailing: Icon(Icons.keyboard_arrow_left_outlined,
                    color: Color(0xff27C5E8)),
              ),
              Divider(
                color: Color(0xff6B6B6B),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
