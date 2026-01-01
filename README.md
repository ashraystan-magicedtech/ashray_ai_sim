# Mastering AI at Work - Interactive Simulation

A fully functional, interactive corporate learning simulation built with React, TypeScript, and TailwindCSS. This simulation helps professionals learn how to effectively and ethically use AI tools in the workplace.

## Features

- **Interactive Scenarios**: 6 realistic workplace scenarios covering key AI concepts
- **Branching Logic**: Dynamic progression based on user choices
- **Immediate Feedback**: Instant feedback with explanations for each choice
- **Progress Tracking**: Real-time score tracking and progress visualization
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Learning Points**: Key takeaways highlighted after each scenario

## Topics Covered

1. **Introduction to AI at Work** - Understanding AI's role in augmenting human capabilities
2. **Effective Prompting** - Learning to communicate clearly with AI tools
3. **Data Privacy** - Protecting sensitive information when using AI
4. **Critical Thinking** - Verifying and improving AI outputs
5. **Ethical AI Use** - Making responsible decisions about AI implementation
6. **Continuous Learning** - Staying effective with evolving AI technology

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
simulation/
├── src/
│   ├── components/
│   │   ├── WelcomeScreen.tsx      # Initial welcome screen
│   │   ├── ScenarioCard.tsx       # Interactive scenario component
│   │   ├── CompletionScreen.tsx   # Final results screen
│   │   └── ProgressBar.tsx        # Progress tracking component
│   ├── data/
│   │   └── simulationData.ts      # Scenario content and configuration
│   ├── types.ts                   # TypeScript type definitions
│   ├── App.tsx                    # Main application component
│   ├── main.tsx                   # Application entry point
│   └── index.css                  # Global styles and Tailwind
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Customization

### Adding New Scenarios

Edit `src/data/simulationData.ts` to add or modify scenarios. Each scenario includes:

- **id**: Unique identifier
- **title**: Scenario title
- **description**: Brief description
- **context**: Background information for the scenario
- **question**: The question learners need to answer
- **choices**: Array of possible choices with feedback and points
- **learningPoint**: Key takeaway from the scenario
- **nextScenarioId**: ID of the next scenario (optional)

### Customizing Styles

- Modify `tailwind.config.js` to change colors, fonts, and other design tokens
- Edit `src/index.css` to customize component styles
- Adjust individual component styles in their respective `.tsx` files

### Changing Passing Score

Edit the `passingScore` property in `src/data/simulationData.ts` (default is 70%).

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is provided as-is for educational purposes.

## Support

For questions or issues, please refer to the documentation or contact your training administrator.
