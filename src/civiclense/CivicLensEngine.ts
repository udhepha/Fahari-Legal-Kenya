import { GoogleGenAI, Type } from "@google/genai";

// --- Types and Enums ---

export enum IssueCategory {
  GOVERNANCE = "Governance",
  INFRASTRUCTURE = "Infrastructure",
  HUMAN_RIGHTS = "Human Rights",
  ENVIRONMENT = "Environment",
  HEALTH = "Health",
  EDUCATION = "Education",
  SECURITY = "Security",
  OTHER = "Other",
}

export enum UrgencyLevel {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
  CRITICAL = "Critical",
}

export interface CivicLensAnalysis {
  issueCategory: IssueCategory[];
  urgencyLevel: UrgencyLevel;
  systemicPatterns: string[];
  institutionsMentioned: string[];
  geographicReferences: string[];
  advocacyInsights: string[];
}

export interface CivicLensConfig {
  apiKey: string;
  model: string;
}

// --- CivicLensEngine Class ---

export class CivicLensEngine {
  private ai: GoogleGenAI;
  private model: string;

  constructor(config: CivicLensConfig) {
    if (!config.apiKey) {
      throw new Error("API key is required for CivicLensEngine.");
    }
    this.ai = new GoogleGenAI({ apiKey: config.apiKey });
    this.model = config.model;
  }

  /**
   * Analyzes a given civic issue text and returns a structured CivicLensAnalysis.
   * @param issueText The text describing the civic issue.
   * @returns A promise that resolves to a CivicLensAnalysis object.
   */
  public async analyzeIssue(issueText: string): Promise<CivicLensAnalysis> {
    const prompt = `Analyze the following civic issue report and provide a structured JSON output based on the following criteria:

Issue Report: """${issueText}"""

Output should be a JSON object with the following properties:
- issueCategory: An array of relevant IssueCategory enums (e.g., ["Governance", "Infrastructure"]).
- urgencyLevel: A single UrgencyLevel enum (e.g., "High").
- systemicPatterns: An array of identified systemic issues or recurring problems.
- institutionsMentioned: An array of specific institutions, organizations, or government bodies mentioned.
- geographicReferences: An array of specific locations, cities, regions, or landmarks mentioned.
- advocacyInsights: An array of actionable suggestions or strategies for advocacy related to the issue.

Ensure the output is strict JSON and adheres to the specified enums.`;

    const response = await this.ai.models.generateContent({
      model: this.model,
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            issueCategory: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
                enum: Object.values(IssueCategory),
              },
            },
            urgencyLevel: {
              type: Type.STRING,
              enum: Object.values(UrgencyLevel),
            },
            systemicPatterns: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            institutionsMentioned: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            geographicReferences: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            advocacyInsights: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          required: [
            "issueCategory",
            "urgencyLevel",
            "systemicPatterns",
            "institutionsMentioned",
            "geographicReferences",
            "advocacyInsights",
          ],
        },
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response text received from the AI model.");
    }

    try {
      const analysis: CivicLensAnalysis = JSON.parse(text);
      return analysis;
    } catch (error) {
      console.error("Failed to parse AI response as JSON:", text, error);
      throw new Error("Invalid JSON response from AI model.");
    }
  }
}
