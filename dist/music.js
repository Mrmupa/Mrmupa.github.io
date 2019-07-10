const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	{
        name: "Five Hundred Miles",
        artist: 'Justin Timberlake&Carey',
        url: 'http://www.ytmp3.cn/down/47526.mp3',
        cover: 'http://img.ytmp3.cn/image/69.jpg',
      },
      {
        name: 'Shape Of You',
        artist: 'Ed Sheeran',
        url: 'http://www.ytmp3.cn/down/50280.mp3',
        cover: 'http://img.ytmp3.cn/image/11.jpg',
      }
    ]
});
//http://www.ytmp3.cn外链