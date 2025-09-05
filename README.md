# draggableflatlist-gesture-issue-02

## Description

This app is designed to recreate the crash that occurs when the react-native-draggable-flatlist and react-native-gesture-handler are used in the same application.

This is simple version where both functionalities are on the same screen. I have another where the functioantlities are on different screens and the crash still occurs.

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/your-username/draggableflatlist-gesture-issue-02.git
   cd draggableflatlist-gesture-issue-02
   ```
2. Install dependencies:
   ```
   yarn
   ```
   or
   ```
   npm install
   ```

## Expected vs. Actual behavior

- Expected: tapping gesture should display an alert on the device screen.
- Actual: tapping gesture causes the app to crash - no errors are displayed, only crash log.

## Demos

### Draggable FlatList

![Draggable FlatList](https://costa-rica.github.io/Videos/20250904draggableFL.gif)

### Gesture Handler

👉 this only works prior to implmenting the draggable flatlist.

![Gesture Handler](https://costa-rica.github.io/Videos/2050904gesture.gif)
