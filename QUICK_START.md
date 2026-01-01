# Quick Start Guide

## Installation & Running

1. **Navigate to the simulation folder:**
   ```bash
   cd "d:\Boords_WBT AI\simulation"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - The simulation will automatically open at `http://localhost:3000`
   - Or manually navigate to the URL shown in the terminal

## What You'll See

### Welcome Screen
- Overview of the simulation
- Learning objectives
- Instructions on how to proceed

### Interactive Scenarios
The simulation includes 6 scenarios:
1. **Welcome to AI at Work** - Understanding AI's role
2. **Crafting Effective Prompts** - Learning to communicate with AI
3. **Data Privacy and Confidentiality** - Protecting sensitive information
4. **Critical Thinking and Verification** - Evaluating AI outputs
5. **Ethical AI Use** - Making responsible decisions
6. **Continuous Learning and Adaptation** - Staying effective with AI

### Features
- Multiple choice questions with immediate feedback
- Points system with scoring
- Progress tracking
- Learning points after each scenario
- Final completion screen with results

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready to deploy to any web server.

## Customizing Content

To modify scenarios or add your own content from the PDF storyboard:

1. Open `src/data/simulationData.ts`
2. Edit the `scenarios` array
3. Each scenario has:
   - `id`: Unique identifier
   - `title`: Scenario title
   - `context`: Background information
   - `question`: The question to answer
   - `choices`: Array of options with feedback and points
   - `learningPoint`: Key takeaway
   - `nextScenarioId`: Link to next scenario

## Troubleshooting

**If you see TypeScript errors:**
- These are expected before installing dependencies
- Run `npm install` to resolve them

**If the dev server doesn't start:**
- Make sure Node.js is installed (version 16 or higher)
- Check that port 3000 is not in use

**If styles don't load:**
- Ensure TailwindCSS is properly configured
- Try clearing the cache: `npm run dev -- --force`

## Next Steps

After testing the simulation, you can:
1. Customize the scenarios with content from your PDF storyboard
2. Adjust the styling and branding
3. Deploy to a web server or LMS
4. Add additional features like certificates or analytics
