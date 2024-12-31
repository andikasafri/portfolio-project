import Image from "next/image";

type Project = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
};

export default async function Projects() {
  const response = await fetch("http://localhost:3000/projects");
  const projects: Project[] = await response.json();

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="border p-4 rounded-lg shadow-sm bg-gray-800"
          >
            {project.imageUrl ? (
              <Image
                src={project.imageUrl}
                alt={project.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
            ) : (
              <div className="w-full h-48 bg-gray-700 mb-4 rounded-lg flex items-center justify-center text-gray-400">
                No Image Available
              </div>
            )}
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-300">{project.description}</p>
            <a
              href={project.projectUrl}
              className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
