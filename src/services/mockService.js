// Simple mock service that loads JSON mock data locally
import resources from '../data/resources.json';
import forum from '../data/forum.json';
import appointments from '../data/appointments.json';

export const fetchResources = async () => {
  await new Promise((r) => setTimeout(r, 350));
  return resources;
};

export const fetchForumPosts = async () => {
  await new Promise((r) => setTimeout(r, 300));
  return forum;
};

export const fetchAppointments = async () => {
  await new Promise((r) => setTimeout(r, 300));
  return appointments;
};

export const createAppointment = async (payload) => {
  // For mock, just return the payload with an id and savedAt
  await new Promise((r) => setTimeout(r, 300));
  return { id: Date.now().toString(), ...payload };
};
