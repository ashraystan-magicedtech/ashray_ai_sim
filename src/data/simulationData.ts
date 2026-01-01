import { SimulationData } from '../types';

export const simulationData: SimulationData = {
  title: "Mastering AI at Work",
  description: "An interactive simulation to help you understand how to effectively use AI tools in professional settings.",
  passingScore: 70,
  scenarios: [
    {
      id: "intro",
      title: "Welcome to AI at Work",
      description: "Introduction to AI in the workplace",
      context: "You're a professional working in a modern organization that's adopting AI tools. Throughout this simulation, you'll face realistic scenarios where you need to make decisions about using AI effectively and ethically.",
      question: "What's your primary goal when using AI tools at work?",
      choices: [
        {
          id: "a",
          text: "To completely automate my job and do less work",
          isCorrect: false,
          feedback: "While AI can automate tasks, the goal isn't to avoid work entirely. AI should augment your capabilities and free you up for higher-value activities.",
          points: 0
        },
        {
          id: "b",
          text: "To enhance my productivity and focus on strategic, creative work",
          isCorrect: true,
          feedback: "Excellent! AI is best used as a tool to augment your capabilities, handling routine tasks so you can focus on work that requires human judgment, creativity, and strategic thinking.",
          points: 10
        },
        {
          id: "c",
          text: "To replace human decision-making with AI recommendations",
          isCorrect: false,
          feedback: "AI should support, not replace, human decision-making. Critical thinking and human judgment remain essential, especially for important decisions.",
          points: 0
        },
        {
          id: "d",
          text: "To use the latest technology regardless of whether it helps",
          isCorrect: false,
          feedback: "Technology should serve a purpose. Using AI just because it's new isn't effective—you need to identify where it genuinely adds value.",
          points: 0
        }
      ],
      learningPoint: "AI tools are most effective when used to augment human capabilities, not replace them. The goal is to enhance productivity and enable you to focus on high-value work that requires uniquely human skills.",
      nextScenarioId: "scenario1"
    },
    {
      id: "scenario1",
      title: "Crafting Effective Prompts",
      description: "Learning to communicate with AI effectively",
      context: "You need to use an AI assistant to help draft a project proposal. The quality of your output depends heavily on how you communicate with the AI.",
      question: "Which prompt would be most effective for getting a high-quality draft?",
      choices: [
        {
          id: "a",
          text: "Write a proposal",
          isCorrect: false,
          feedback: "This prompt is too vague. AI needs context, specifics, and clear instructions to produce useful output.",
          points: 0
        },
        {
          id: "b",
          text: "Write a project proposal for implementing a new customer feedback system. Include: executive summary, problem statement, proposed solution, timeline, budget estimate, and expected ROI. Target audience: senior management. Tone: professional and persuasive. Length: 3-4 pages.",
          isCorrect: true,
          feedback: "Perfect! This prompt includes context, specific requirements, audience, tone, and length. Clear, detailed prompts produce better results.",
          points: 15
        },
        {
          id: "c",
          text: "Can you help me with something?",
          isCorrect: false,
          feedback: "This is too general. Be specific about what you need and provide relevant context.",
          points: 0
        },
        {
          id: "d",
          text: "Write the best proposal ever about customer feedback",
          isCorrect: false,
          feedback: "While more specific than option A, this still lacks structure, context, and clear requirements. 'Best ever' is subjective and unhelpful.",
          points: 5
        }
      ],
      learningPoint: "Effective prompts are specific, provide context, define the format and tone, specify the audience, and include any constraints like length or structure. Think of prompting as giving clear instructions to a skilled colleague.",
      nextScenarioId: "scenario2"
    },
    {
      id: "scenario2",
      title: "Data Privacy and Confidentiality",
      description: "Understanding boundaries when using AI",
      context: "You're working on a sensitive client project and considering using an AI tool to help analyze some data and generate insights.",
      question: "What should you do before inputting any information into the AI tool?",
      choices: [
        {
          id: "a",
          text: "Input all the data—AI tools are secure and confidential",
          isCorrect: false,
          feedback: "Never assume any tool is automatically secure. Many AI tools process data on external servers and may use inputs for training. Always verify first.",
          points: 0
        },
        {
          id: "b",
          text: "Check company policies, verify the tool's data handling practices, and remove or anonymize any sensitive/confidential information",
          isCorrect: true,
          feedback: "Excellent! Always follow company policies, understand how tools handle data, and protect sensitive information. When in doubt, anonymize or use synthetic data.",
          points: 15
        },
        {
          id: "c",
          text: "Only use the AI tool at home on your personal computer",
          isCorrect: false,
          feedback: "Using personal devices doesn't solve confidentiality issues and may violate company policies. The key is understanding data handling, not where you access the tool.",
          points: 0
        },
        {
          id: "d",
          text: "Ask the AI tool if it's safe to share confidential data",
          isCorrect: false,
          feedback: "AI tools can't reliably assess their own security practices or your company's policies. You need to verify through official documentation and company guidelines.",
          points: 0
        }
      ],
      learningPoint: "Data privacy is critical. Always check company policies, understand how AI tools handle data, and never input confidential or sensitive information without proper authorization and safeguards. When possible, anonymize data or use synthetic examples.",
      nextScenarioId: "scenario3"
    },
    {
      id: "scenario3",
      title: "Critical Thinking and Verification",
      description: "Evaluating AI outputs",
      context: "An AI tool has generated a detailed market analysis report for your team. The report looks professional and includes statistics and trends.",
      question: "What's the best approach to using this AI-generated report?",
      choices: [
        {
          id: "a",
          text: "Share it immediately with stakeholders—it looks professional and complete",
          isCorrect: false,
          feedback: "Never share AI-generated content without verification. AI can produce plausible-sounding but inaccurate information, including false statistics.",
          points: 0
        },
        {
          id: "b",
          text: "Verify all facts and statistics, check for logical consistency, add your expertise and context, and cite sources appropriately",
          isCorrect: true,
          feedback: "Perfect! AI outputs should always be verified, especially factual claims. Your expertise and judgment are essential for ensuring accuracy and relevance.",
          points: 15
        },
        {
          id: "c",
          text: "Delete it and start from scratch—AI can't be trusted",
          isCorrect: false,
          feedback: "This is too extreme. AI can be valuable for drafting and ideation, but outputs need verification and human oversight. Use AI as a starting point, not the final product.",
          points: 0
        },
        {
          id: "d",
          text: "Only change the formatting and design before sharing",
          isCorrect: false,
          feedback: "Superficial changes don't address the core issue: you need to verify accuracy, add your expertise, and ensure the content is reliable and appropriate.",
          points: 5
        }
      ],
      learningPoint: "Always apply critical thinking to AI outputs. Verify facts, check for biases or errors, add your professional expertise, and take responsibility for any content you share. AI is a tool to assist you, not replace your judgment.",
      nextScenarioId: "scenario4"
    },
    {
      id: "scenario4",
      title: "Ethical AI Use",
      description: "Making responsible decisions",
      context: "Your manager asks you to use AI to screen job applications. The AI tool claims it can predict candidate success based on resumes.",
      question: "What concerns should you consider before implementing this AI screening tool?",
      choices: [
        {
          id: "a",
          text: "None—AI is objective and will make better decisions than humans",
          isCorrect: false,
          feedback: "AI is not inherently objective. AI systems can perpetuate or amplify biases present in their training data, leading to unfair outcomes.",
          points: 0
        },
        {
          id: "b",
          text: "Potential bias in training data, fairness and discrimination concerns, transparency of decision-making, and legal/regulatory compliance",
          isCorrect: true,
          feedback: "Excellent! These are critical considerations. AI in hiring decisions requires careful evaluation of bias, fairness, transparency, and compliance with employment laws.",
          points: 15
        },
        {
          id: "c",
          text: "Only whether it will save time compared to manual review",
          isCorrect: false,
          feedback: "Efficiency is important, but ethical considerations, fairness, and legal compliance are paramount, especially in hiring decisions that affect people's livelihoods.",
          points: 0
        },
        {
          id: "d",
          text: "Just make sure the AI tool is expensive—higher cost means better quality",
          isCorrect: false,
          feedback: "Cost doesn't guarantee ethical design or effectiveness. You need to evaluate the tool's methodology, training data, bias testing, and compliance with regulations.",
          points: 0
        }
      ],
      learningPoint: "AI systems can perpetuate biases and create ethical concerns, especially in high-stakes decisions like hiring. Always consider fairness, transparency, potential discrimination, and legal compliance. Human oversight remains essential.",
      nextScenarioId: "scenario5"
    },
    {
      id: "scenario5",
      title: "Continuous Learning and Adaptation",
      description: "Staying effective with AI tools",
      context: "You've been using AI tools for several months. The technology is evolving rapidly, and new capabilities are being released regularly.",
      question: "What's the best approach to staying effective with AI tools?",
      choices: [
        {
          id: "a",
          text: "Stick with what you know—changing tools constantly is inefficient",
          isCorrect: false,
          feedback: "While consistency has value, AI is evolving rapidly. Staying informed about new capabilities and best practices helps you remain effective and competitive.",
          points: 5
        },
        {
          id: "b",
          text: "Try every new AI tool that's released to stay current",
          isCorrect: false,
          feedback: "This approach is overwhelming and inefficient. Focus on tools relevant to your work and evaluate them thoughtfully rather than chasing every new release.",
          points: 0
        },
        {
          id: "c",
          text: "Regularly learn about AI developments, experiment with relevant tools, share knowledge with colleagues, and refine your approach based on results",
          isCorrect: true,
          feedback: "Perfect! Continuous learning, thoughtful experimentation, knowledge sharing, and iterative improvement are key to staying effective with AI tools.",
          points: 15
        },
        {
          id: "d",
          text: "Wait for your company to provide formal training before trying anything new",
          isCorrect: false,
          feedback: "While formal training is valuable, being proactive about learning and experimentation (within company guidelines) helps you stay ahead and contribute more effectively.",
          points: 5
        }
      ],
      learningPoint: "AI technology evolves rapidly. Stay effective by continuously learning, experimenting thoughtfully with relevant tools, sharing knowledge with your team, and refining your approach based on what works. Balance innovation with practical application.",
      nextScenarioId: "completion"
    },
    {
      id: "completion",
      title: "Simulation Complete",
      description: "Review your results",
      context: "Congratulations! You've completed the Mastering AI at Work simulation. You've explored key concepts including effective prompting, data privacy, critical thinking, ethical considerations, and continuous learning.",
      question: "What's your key takeaway from this simulation?",
      choices: [
        {
          id: "a",
          text: "AI is a powerful tool that augments human capabilities when used thoughtfully and ethically",
          isCorrect: true,
          feedback: "Excellent! This captures the essence of effective AI use at work—it's about augmentation, not replacement, combined with responsibility and critical thinking.",
          points: 10
        },
        {
          id: "b",
          text: "AI will eventually replace most human workers",
          isCorrect: false,
          feedback: "This misses the point. AI is a tool that changes how we work, but human judgment, creativity, ethics, and strategic thinking remain essential.",
          points: 0
        },
        {
          id: "c",
          text: "AI is too risky to use in professional settings",
          isCorrect: false,
          feedback: "AI has risks, but with proper understanding, policies, and oversight, it can be used safely and effectively. The key is informed, responsible use.",
          points: 0
        },
        {
          id: "d",
          text: "The best approach is to use AI for everything possible",
          isCorrect: false,
          feedback: "AI should be used strategically where it adds value. Not every task benefits from AI, and some require human judgment and expertise.",
          points: 5
        }
      ],
      learningPoint: "Mastering AI at work means understanding how to use these tools to augment your capabilities while maintaining critical thinking, ethical standards, and professional responsibility. Success comes from combining AI's strengths with uniquely human skills."
    }
  ]
};
