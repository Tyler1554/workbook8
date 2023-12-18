const christmasSongs = [
    {
      title: "Jingle Bells",
      artist: "James Lord Pierpont",
      year: 1857
    },
    {
      title: "Silent Night",
      artist: "Franz Xaver Gruber",
      year: 1818
    },
    {
      title: "Deck the Halls",
      artist: "Traditional",
      year: "18th century"
    },
    {
      title: "Feliz Navidad",
      artist: "José Feliciano",
      year: 1970
    },
    {
      title: "Rudolph the Red-Nosed Reindeer",
      artist: "Johnny Marks",
      year: 1949
    },
    {
      title: "White Christmas",
      artist: "Irving Berlin",
      year: 1942
    },
    {
      title: "The Christmas Song",
      artist: "Mel Tormé and Robert Wells",
      year: 1945
    },
    {
      title: "Let It Snow! Let It Snow! Let It Snow!",
      artist: "Sammy Cahn and Jule Styne",
      year: 1945
    },
    {
      title: "Winter Wonderland",
      artist: "Felix Bernard and Richard B. Smith",
      year: 1934
    },
    {
      title: "O Holy Night",
      artist: "Adolphe Adam",
      year: 1847
    }
  ];
  
//   console.log(christmasSongs);

//find one thing (find is 1818)
//   console.log(christmasSongs.find(song => song.year == 1818));

  //filters list to 0-many of the filter (here filter is 1945)
  console.log(christmasSongs.filter(song => song.year == 1945));