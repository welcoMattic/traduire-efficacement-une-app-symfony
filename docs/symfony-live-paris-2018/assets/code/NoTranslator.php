public function trans($id, array $parameters = [], $domain = null, $locale = null)
{
    if ($domain === 'routes') {
        return $this->translator->trans($id, $parameters, $domain, $locale);
    }

    return $id;
}
