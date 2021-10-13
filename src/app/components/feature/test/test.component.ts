import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  audioList = [
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      title: "Smaple 1",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/mudule6.appspot.com/o/LacTroi-SonTungMTP-4725907.mp3?alt=media&token=a2bda07e-b488-47bc-8408-052b8e5c4faf",
      title: "Sample 2",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/mudule6.appspot.com/o/Muon%20Roi%20Ma%20Sao%20Con%20-%20Son%20Tung%20M-TP.mp3?alt=media&token=1d43b9d0-ef92-4e38-9034-4730dbbcc193",
      title: "Sample 3",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    }
  ];
}
