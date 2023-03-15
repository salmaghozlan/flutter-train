import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';
import 'package:chewie/chewie.dart';

class AmazonWidget extends StatefulWidget {
  @override
  _AmazonWidgetState createState() => _AmazonWidgetState();
}

class _AmazonWidgetState extends State<AmazonWidget> {
  late VideoPlayerController _videoPlayerController;
  late ChewieController _chewieController;

  String _description =
      "Excepteur elit dolore exercitation proident velit officia et ipsum magna labore eiusmod. Et ullamco dolor minim sit aute cillum amet ad culpa est reprehenderit. Nulla esse ea adipisicing pariatur officia mollit reprehenderit cupidatat sunt. Enim laboris laborum eu ad duis. Adipisicing nisi minim velit aliquip enim ut ipsum id quis sint nisi dolore ex sit. Nulla nulla duis enim nisi enim minim qui reprehenderit consequat excepteur reprehenderit.";

  bool _showFullDescription = false;

  @override
  void initState() {
    super.initState();
    _videoPlayerController = VideoPlayerController.network(
        'https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4');
    _chewieController = ChewieController(
      videoPlayerController: _videoPlayerController,
      autoInitialize: true,
      looping: true,
      showControls: true,
      
    );
  }

  @override
  void dispose() {
    super.dispose();
    _videoPlayerController.dispose();
    _chewieController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: Column(
          children: [
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
              title: Text("Amazon Ads"),
              subtitle: Text("Promoted"),
              trailing: Icon(Icons.more_horiz),
            ),

            Container(
              padding: EdgeInsets.symmetric(horizontal: 10.0),
              child: GestureDetector(
                onTap: () {
                  setState(() {
                    _showFullDescription = !_showFullDescription;
                  });
                },
                child: Text(
                  _showFullDescription
                      ? _description
                      : _description.substring(0, 100) + "... See More",
                ),
              ),
            ),
           SizedBox(
  height: 300,
  child: Chewie(
    controller: _chewieController,
  ),
),

        Container(
          color: Color.fromARGB(255, 195, 227, 240),
          child: ListTile(
            
            title: Text("Deserunt deserunt consequat consectetur nostrud..." , 
            style: TextStyle(fontWeight: FontWeight.bold , fontSize: 14) ),
               trailing:  Container(
          
           child: OutlinedButton(
                 
                  onPressed: () {},
                  child: Text("Learn more" , style: TextStyle(color: Colors.blue),), 
                ),
               ),
               ),
        ),  

         Divider(
                color: Color.fromARGB(255, 107, 107, 107),
              ),
              
        Container(
          padding: EdgeInsets.only(left: 15),
          child: Row(
            children: [
              SizedBox(width: 10,),

              Column(
                children: [
                  const Icon(
                    Icons.thumb_up,
                    color: Colors.grey,
                  ),
                  TextButton(
                    onPressed: () {},
                    child: const Text("Like"),
                  ),
                ],
              ),
              SizedBox(width: 10,),

              Column(
                children: [
                  const Icon(
                    Icons.mode_comment_outlined,
                    color: Colors.grey,
                  ),
                  TextButton(
                    onPressed: () {},
                    child: const Text("Comment"),
                  ),
                ],
              ),
              SizedBox(width: 10,),

              Column(
                children: [
                  const Icon(
                    Icons.replay_circle_filled_sharp,
                    color: Colors.grey,
                  ),
                  TextButton(
                    onPressed: () {},
                    child: const Text("repost"),
                  ),
                ],
              
              ),
              SizedBox(width: 10,),

              Column(
                
                children: [
                  
                   const Icon(
                    Icons.send,
                    color: Colors.grey,
                  ),
                  TextButton(
                    onPressed: () {},
                    child: const Text("send"),
                  ),
          
          
                ]
                ,
          
              ),
  
            ],
          ),

        ),

         Divider(
                color: Color.fromARGB(255, 107, 107, 107),
              ),
               ],
        ),
        
      ),
    );
  }
}
