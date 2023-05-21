import { executeCommand } from "./exeCommand"

export async function Nmapper(formData)  {
  const { target, requestType, maxRetries, portRange } = formData


  let command = "nmap"

  command +=
    requestType === "-sS" ? " -sS" : 
    requestType === "-sV" ? " -sV" :
    requestType === "-sU" ? " -sU" :

  command += portRange && portRange.length > 0 && requestType 

  command += maxRetries ? ` --max-retries ${maxRetries}` : ""

  command += ` ${target}`

  try {
    const [success, stdout, stderr] = await executeCommand(command)

    if (success) {
      // eslint-disable-next-line no-console
      console.log("Nmap output:", stdout)
      const openPorts = parseNmapOutput(stdout)

      return { openPorts, nmapInput: command, nmapOutput: stdout }
    } else {
      throw new Error(stderr)
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error performing Nmap scan:", error)
    throw error
  }
}

const parseNmapOutput = (output) => {
  const openPorts = []
  const lines = output.split("\n")

  lines.forEach((line) => {
    if (line.includes("open") && line.includes("tcp")) {
      const portMatch = line.match(/(\d+)\/(tcp|udp|sctp)/)

      if (portMatch) {
        const port = parseInt(portMatch[1])
        openPorts.push(port)
      }
    }
  })

  return openPorts
}

export default Nmapper