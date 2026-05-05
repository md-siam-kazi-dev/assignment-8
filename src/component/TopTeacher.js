import React from "react";
const instructors = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Frontend Engineer",
    specialization: "React, TypeScript, Next.js",
    students: 87200,
    courses: 8,
    rating: 4.9,
    reviews: 12400,
    bio: "10+ years building scalable UIs at top tech companies. Ex-Google, ex-Meta.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format",
    cover:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=750&h=200&fit=crop&auto=format",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    slug: "sarah-johnson",
  },
  {
    id: 2,
    name: "Mike Chen",
    title: "Full-Stack Developer & Educator",
    specialization: "Node.js, Python, Cloud",
    students: 104300,
    courses: 12,
    rating: 4.8,
    reviews: 18700,
    bio: "Passionate about teaching backend systems. Built and sold 2 SaaS products.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format",
    cover:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=750&h=200&fit=crop&auto=format",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    slug: "mike-chen",
  },
  {
    id: 3,
    name: "Priya Sharma",
    title: "AI/ML Engineer & Researcher",
    specialization: "Python, TensorFlow, LangChain",
    students: 78900,
    courses: 6,
    rating: 4.9,
    reviews: 9800,
    bio: "PhD in Machine Learning. Worked at DeepMind. Makes complex AI simple.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format",
    cover:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=750&h=200&fit=crop&auto=format",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    slug: "priya-sharma",
  },
];

const TopTeacher = () => {
  return (
    <div className="container-div mt-20 text-center">
      <h1 className="section-heading">Top Instructor</h1>
      <div className="ti-container mt-10 w-fit gap-2 mx-auto grid grid-cols-1 md:grid-cols-3">
        {instructors.map((i) => {
          return (
            <div key={i.avatar} className="rounded-xl w-full  mx-auto overflow-hidden border shadow">
            
             

              
              <div className="mx-auto mt-5 px-4">
                <img
                  src={i.avatar}
                  className="w-16 h-16 rounded-full border-4 mx-auto border-white "
                />
              </div>


              <div className="px-4 pb-4">
                <h3>{i.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {i.title}
                </p>
                <p className="text-xs mt-1">{i.specialization}</p>
                <div className="flex gap-4 mt-3 text-sm">
                  <span>⭐ {i.rating}</span>
                  <span>👨‍🎓 {i.students.toLocaleString()}</span>
                  <span>📚 {i.courses} courses</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopTeacher;
