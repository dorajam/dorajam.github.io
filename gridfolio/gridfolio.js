                                    /*
Sample Structure:

gf_content =  [
                [ row 1
                  { block 1 },
                  { block 2 },
                  { block 3 }
                ],
                etc.
              ]

Rows can have 1 - 9 blocks.
                                    */

var gf_content = [
  [ // row
    { // block
      title: "Portfolio 2016",
      link: "https://github.com/dorajam",
      imageURL: "",
      customHeight: true,
      style: {
        backgroundColor: "#f1f1f2",
        height: "40px",
        color: "#555",
        fontSize: "10px",
        letterSpacing: "0.5px"
      }
    },
  ],
  [ // row
    { // block
      title: "Dora Jambor",
      style: {
        backgroundColor: "rgba(245, 161, 150, 1)",
        fontSize: "25px",
        letterSpacing: "1px"
      }
    },
    { // block
      // title: "sketch your MNIST - digit recognition with neural networks",
      link: "https://github.com/dorajam/MNIST-web-sketch",
      imageURL: "https://cloud.githubusercontent.com/assets/13997178/14068661/70f4c974-f458-11e5-8ad9-ff92fbb3858f.gif",
      // keywords: ["Python", "Flask","Numpy", "Neural nets", "Javascript"]
      keywords: ["An interactive web app to test the accuracy of a classical neural network in recognizing hand-written digits."]
    },
    { // block
      // title: "Music visualization in D3",        
      link: "https://github.com/dorajam/WebAudio",
      imageURL: "http://i.stack.imgur.com/GwWzJ.gif",
      // keywords: ["Javascript", "WebAudio API", "D3", "DSP"]
      keywords: ["A simple visualization of music in D3.js"]
    },
    { // block
      // title: "Voice detection with neural networks",
      link: "https://github.com/dorajam/Voice-detection",
      imageURL: "http://i.kinja-img.com/gawker-media/image/upload/spmhtd2u9mubb9tnlobc.jpg",
      // keywords: ["Javascript", "WebAudio API", "Mel Scaling", "DCT"]
      keywords: ["Voice detection + feature extraction with neural networks, Mel Frequency Cepstral Coefficients and CQT"]
    }
  ],
  [  // row
    { // block
      // title: "Chess AI",
      link: "https://github.com/cowpig/chess_nn",
      imageURL: "https://chessdailynews.com/wp-content/uploads/2015/12/Chess-pieces-011.jpg",
      // keywords: ["Python", "Tensorflow", "Neural nets"]
      keywords: ["A fully connected neural network that plays chess."]
    },
    { // block
      // title: "OpenCV skin detection",
      link: "https://github.com/dorajam/OpenCV-object-recognition",
      imageURL: "redball.gif",
      // keywords: ["Python", "OpenCV library", "Color detection"]
      keywords: ["Skin, edge and object detection in OpenCV."]
    },
    { // block
      title: "Convolutional network",
      link: "https://github.com/dorajam/Convolutional-Network",
      imageURL: "neurons.png",
      keywords: ["Python","Numpy","Neural nets"],
      style: {
        backgroundColor: "rgba(245, 161, 150, 0.3)",
        fontSize: "25px",
        letterSpacing: "1px"
      }
    },
    { // block
      title: "Personal website",
      link: "https://github.com/dorajam/dorajam.github.io",
      imageURL: "yellow.png",
      keywords: ["HTML", "CSS","Javascript"],
      style: {
        backgroundColor: "rgba(245, 161, 150, 0.3)",
        fontSize: "25px",
        letterSpacing: "1px"
      }
    }
  ]
]


// attributes of the blocks
var gf_styles = {
  squareMode: true,
  innerBlock: {
    fontFamily: "Montserrat",
    color: "#fff",
    padding: "10px"
  },
  blockTitle: {
    margin: "0 auto",
    textTransform: "uppercase"
  },
  keyword: {
    fontSize: "11px",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: "2px 5px",
    margin: "2px"
  },
  keywords: {
    fontSize: "10px",
    marginTop: "-50px"
  }
}

// hide social icons with scroll down
$(window).scroll(function() {
  if ($(this).scrollTop()>0)
  {
    $('.icon').fadeOut();
  }
  else
  {
    $('.icon').fadeIn();
  }
});
