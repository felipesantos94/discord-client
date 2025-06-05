import { Request, Response } from "express";
import presenceService from "../service/presenceService";

const getAllPresenceActivities = (_req: Request, res: Response): void => {
  try {
    res.status(200).json(presenceService.getAll());
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getPresenceById = (req: Request, res: Response): void => {
  try {
    const id = parseInt(req.params.id);
    const presenceActivity = presenceService.getById(id);

    if (!presenceActivity) {
      res.status(404).send("Presence activity not found");
    }

    res.status(200).json(presenceActivity);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const createPresenceActivity = (req: Request, res: Response): void => {
  try {
    const { name, type, details, createdTimestamp } = req.body;
    const presenceActivity = presenceService.insert(
      name,
      type,
      details,
      createdTimestamp
    );
    res.status(201).json(presenceActivity);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export { getAllPresenceActivities, getPresenceById, createPresenceActivity };
