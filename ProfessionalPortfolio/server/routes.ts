import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { createContactNotificationEmail, sendEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(messageData);
      
      // Send email notification
      try {
        const emailParams = createContactNotificationEmail(messageData);
        await sendEmail(emailParams);
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // We don't want the API to fail if only the email fails
        // So we just log the error and continue
      }
      
      res.json(message);
    } catch (error) {
      res.status(400).json({ message: "Invalid message data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
