/**
 * Processing Sound Library, Example 6
 * 
 * This sketch shows how to use the Amplitude class to analyze a
 * stream of sound. In this case a sample is analyzed. The smoothFactor
 * variable determines how much the signal will be smoothed on a scale
 * from 0 - 1.
 */

import processing.sound.*;

// Declare the processing sound variables 
SoundFile sample;
Amplitude rms;

// Declare a scaling factor
float scale = 5.0;

// Declare a smooth factor
float smoothFactor = 0.25;

// Used for smoothing
float sum;

String musicMood;

void setup() {
  size(640, 360);

  // sample = new SoundFile(this, "AlanWalker_Alone.mp3");
  // sample.loop();

  // Create and patch the rms tracker
  rms = new Amplitude(this);
  play("C:\\temp\\test.mp3");
}

void play(String musicurl) {
  //Load and play a soundfile and loop it
  sample = new SoundFile(this, musicurl);
  sample.loop();
  rms.input(sample);
}

String getMusicMood(String musicurl){
  sample = new SoundFile(this, musicurl);
  rms.input(sample);
  
  // get the mood (rms just for try)
  float rmsScaled = sum * (height/2) * scale;
  if (rmsScaled > 0.5) {
    musicMood = "yellow";
  }
  return musicMood;
}

void draw() {
  // Set background color, noStroke and fill color
  background(0, 0, 255);
  noStroke();
  fill(255, 0, 150);

  // Smooth the rms data by smoothing factor
  sum += (rms.analyze() - sum) * smoothFactor;  

  // rms.analyze() return a value between 0 and 1. It's
  // scaled to height/2 and then multiplied by a scale factor
  float rmsScaled = sum * (height/2) * scale;

  // Draw an ellipse at a size based on the audio analysis
  ellipse(width/2, height/2, rmsScaled, rmsScaled);
}