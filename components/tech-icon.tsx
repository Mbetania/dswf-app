interface TechIconProps {
  technology: string
}

export function TechIcon({ technology }: TechIconProps) {
  const getIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "react":
        return "⚛️"
      case "node.js":
        return "🟢"
      case "javascript":
        return "🟨"
      case "html5":
        return "🧡"
      case "css3":
        return "🔵"
      case "git":
        return "📝"
      case "python":
        return "🐍"
      case "postgresql":
        return "🐘"
      case "mongodb":
        return "🍃"
      case "docker":
        return "🐳"
      case "aws":
        return "☁️"
      case "jira":
        return "📋"
      case "confluence":
        return "📖"
      case "figma":
        return "🎨"
      case "slack":
        return "💬"
      default:
        return "⚡"
    }
  }

  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
        {getIcon(technology)}
      </div>
      <span className="text-xs text-gray-600 font-medium">{technology}</span>
    </div>
  )
}
