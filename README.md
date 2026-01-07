# Drag-Drop-Game

This drag and drop game is as such:

[COMPONENTS]
1. DraggableOption
2. DropZone
3. MapCanvas
4. Options Panel
5. ResultModal
6. StartScreen

[DATA]
1. mapData

[HOOKS]
1. userGameTimer

[OTHER FILES]
1. App.tsx
2. main.tsx
3. types.tsx

[INSTRUCTIONS TO MODIFY CONTENT]
❗❗❗ [SAMPLE] 
{ id: "KUALA_LUMPUR", leftPct: 0.293, topPct: 0.238, widthPct: 0.085, heightPct: 0.056, answer: "KUALA LUMPUR" }
[ID] Unique Indentifier for Locations (must include _ for locations with spacing)
[LeftPCT] Left Position from screen, ranges from 0-1
[TopPCT] Top Position from screen, ranges from 0-1
[WidthPCT] Width of position
[HeightPCT] Height of position
[Answer] Correct Answer for location

1. Ctrl + F and search outline in styles/app.css (to identify where boxes are being placed - should be dotted green line). After located select entire line and uncomment it (Ctrl + /)
2. Go to mapData under /data/mapData
3. Modify data to the above instructions to your liking
4. Rember to save after all changes
5. Ctrl + Shift + ` to open command terminal and type in "npm run dev"
6. Test all changes that have been made, e.g location of boxes placed, answer valid/invalid
7. After testing done, do to terminal and Ctrl + C
8. Ctrl + F and search outline in styles/app.css (to identify where boxes are being placed - should be dotted green line) After located select entire line and comment it (Ctrl + /)
9. Press source control from the left nav bar and commit all changes (select all items and type in commit message)
10. Press sync changes
11. In terminal type in "npm run build" (Should show built in XXXms)
12. After build completes type in "npm run deploy" (Should show directory and ends of with published)