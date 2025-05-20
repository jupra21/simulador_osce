import { Request, Response } from 'express';
import { getQuestionsBySimulator } from '../services/questionService';

export const getCurrentQuestion = async (req: Request, res: Response) => {
  const { simulatorId, questionIndex } = req.params;
  
  try {
    const question = await getQuestionsBySimulator(simulatorId, parseInt(questionIndex));
    
    // Solo enviar la pregunta sin la respuesta correcta
    const { correctAnswer, explanation, ...questionWithoutAnswer } = question;
    
    res.json(questionWithoutAnswer);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la pregunta' });
  }
};

export const checkAnswer = async (req: Request, res: Response) => {
  const { simulatorId, questionId, answer } = req.body;
  
  try {
    const result = await validateAnswer(simulatorId, questionId, answer);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error al validar la respuesta' });
  }
};
