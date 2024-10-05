declare global {
  namespace Express {
    interface Request {
      findUserIndex?: number;
    }
  }
}

export {};
