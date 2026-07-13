# 1. Importamos las librerías necesarias
from dotenv import load_dotenv
from google import genai

# 2. Cargamos las variables de entorno para la API Key
load_dotenv()
client = genai.Client()

# 3. Definimos el prompt básico de Pair Programming tal como lo hace el video
prompt = "Show me how to iterate across a list in Python."
prompt2 = "Write code to iterate across a list in Python."

# 4. Consumimos la API usando interactions con el modelo rápido estándar
interaction = client.interactions.create(
    model="gemini-3.5-flash",
    input=prompt
)

# 5. Imprimimos la respuesta en pantalla
print(interaction.output_text)

# ----------------------------------------------------------------

prompt_template = """
{priming}

{question}

{decorator}

your_solution:
"""

priming_text = "You are an expert at writing clear, concise, Python code."
question = "create a doubly linked list"
decorator = "Insert comments for each line of code."

interaction = client.interactions.create(
    model="gemini-3.5-flash",
    input=prompt_template.format(
        priming=priming_text,
        question=question,
        decorator=decorator
    )
)

print(interaction.output_text)