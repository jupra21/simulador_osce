import { Request, Response } from 'express';
import { getQuestionsBySimulator, validateAnswer } from '../services/questionService';

export const getCurrentQuestion = async (req: Request, res: Response) => {
  const { simulatorId, questionIndex } = req.params;
  
  try {
    // getQuestionsBySimulator already returns the question without correctAnswer and explanation
    const question = await getQuestionsBySimulator(simulatorId, parseInt(questionIndex));
    
    if (question) {
      res.json(question);
    } else {
      res.status(404).json({ error: 'Pregunta no encontrada' });
    }
  } catch (error) {
    // Log the error for server-side debugging
    console.error('Error in getCurrentQuestion:', error);
    res.status(500).json({ error: 'Error al obtener la pregunta' });
  }
};

export const checkAnswer = async (req: Request, res: Response) => {
  const { simulatorId, questionId, answer } = req.body;
  
  try {
    const result = await validateAnswer(simulatorId, questionId, answer);
    if (result) {
      res.json(result);
    } else {
      // This case might occur if validateAnswer is modified to return null for not found questions/simulators
      res.status(404).json({ error: 'No se pudo validar la respuesta o la pregunta no existe' });
    }
  } catch (error) {
    // Log the error for server-side debugging
    console.error('Error in checkAnswer:', error);
    res.status(500).json({ error: 'Error al validar la respuesta' });
  }
};
