import { useState } from 'react'
import './App.css'
import { jobs } from './data/experience'
import { projects } from './data/projects'
import { socialLinks } from './data/social'

function App() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <main className="page">
      <div className="columns">
        <div aria-hidden="true" />
        <section className="landingCard" aria-label="Intro">
          <h1 className="landingName">Hi! I'm Ryan Ma</h1>
          <p className="landingText">
            Computer hobbyist turned into software engineer and builder
          </p>

          <nav className="tabs" aria-label="Sections">
            <button
              className={`tabButton ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
              type="button"
            >
              About
            </button>
            <button
              className={`tabButton ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
              type="button"
            >
              Projects
            </button>
            <button
              className={`tabButton ${activeTab === 'blog' ? 'active' : ''}`}
              onClick={() => setActiveTab('blog')}
              type="button"
            >
              Blog
            </button>
          </nav>

          <div className="tabContent">
            {activeTab === 'about' && (
              <section className="aboutSection">
                <h2 className="aboutHeading">Work Experience</h2>

                <div className="jobList">
                  {jobs.map((job) => {
                    const url = job.link?.trim() ?? ''
                    const hasLink = url.length > 0 && url !== '#'

                    return (
                      <article key={job.id} className="jobCard">
                        <div className="jobCardHeader">
                          <div>
                            <h3 className="jobTitle">
                              {hasLink ? (
                                <a
                                  className="jobTitleLink"
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {job.title}
                                </a>
                              ) : (
                                job.title
                              )}
                            </h3>
                            <p className="jobCompany">{job.company}</p>
                          </div>
                          <span className="jobPeriod">{job.period}</span>
                        </div>
                        <p className="jobDescription">{job.description}</p>
                      </article>
                    )
                  })}
                </div>

                <p className="funFact">
                  Fun fact: I hit Challenger (top 100 NA) in League of Legends
                </p>
              </section>
            )}

            {activeTab === 'projects' && (
              <div className="projectsSection">
                <div className="projectsGrid">
                  {projects.length === 0 && (
                    <p className="projectsEmpty">
                      Add your projects in <code>src/data/projects.js</code>.
                    </p>
                  )}
                  {projects.map((project) => {
                    const url = project.link?.trim() ?? ''
                    const hasLink = url.length > 0 && url !== '#'

                    return (
                      <article key={project.id} className="projectCard">
                        <a
                          className="projectLinkWrap"
                          href={hasLink ? url : '#'}
                          target={hasLink ? '_blank' : undefined}
                          rel={hasLink ? 'noopener noreferrer' : undefined}
                          onClick={(event) => {
                            if (!hasLink) event.preventDefault()
                          }}
                          aria-label={
                            hasLink
                              ? `${project.title} — open project link`
                              : `${project.title} — add a link in projects.js`
                          }
                        >
                          <img src={project.imageUrl} alt={project.title} />
                          <div className="projectMeta">
                            <div className="projectHeader">
                              <h3>{project.title}</h3>
                              <span className="projectDate">{project.date}</span>
                            </div>
                            {project.description && (
                              <p className="projectDescription">{project.description}</p>
                            )}
                          </div>
                        </a>
                      </article>
                    )
                  })}
                </div>
              </div>
            )}

            {activeTab === 'blog' && (
              <p className="sectionCopy">
                still thinking about what to write here...
              </p>
            )}
          </div>

          <div className="socialRow" aria-label="Social and contact links">
            {socialLinks.map((item) => {
              const href = item.href?.trim() ?? ''
              const isHttp = /^https?:\/\//i.test(href)
              const openNewTab = isHttp

              return (
                <a
                  key={item.id}
                  className="socialLink"
                  href={href || '#'}
                  target={openNewTab ? '_blank' : undefined}
                  rel={openNewTab ? 'noopener noreferrer' : undefined}
                  onClick={(event) => {
                    if (!href) event.preventDefault()
                  }}
                  aria-label={item.label}
                >
                  <img
                    className="socialIconImg"
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                  />
                </a>
              )
            })}
          </div>
        </section>
        <div aria-hidden="true" />
      </div>
    </main>
  )
}

export default App
