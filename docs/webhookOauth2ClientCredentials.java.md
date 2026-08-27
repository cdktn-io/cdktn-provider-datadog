# `webhookOauth2ClientCredentials` Submodule <a name="`webhookOauth2ClientCredentials` Submodule" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebhookOauth2ClientCredentials <a name="WebhookOauth2ClientCredentials" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials datadog_webhook_oauth2_client_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer"></a>

```java
import io.cdktn.providers.datadog.webhook_oauth2_client_credentials.WebhookOauth2ClientCredentials;

WebhookOauth2ClientCredentials.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessTokenUrl(java.lang.String)
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .name(java.lang.String)
//  .audience(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.accessTokenUrl">accessTokenUrl</a></code> | <code>java.lang.String</code> | The URL used to fetch the access token. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | The OAuth2 client ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The OAuth2 client secret. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the auth method. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.audience">audience</a></code> | <code>java.lang.String</code> | The audience requested when fetching the access token. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | The scope requested when fetching the access token. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessTokenUrl`<sup>Required</sup> <a name="accessTokenUrl" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.accessTokenUrl"></a>

- *Type:* java.lang.String

The URL used to fetch the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#access_token_url WebhookOauth2ClientCredentials#access_token_url}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

The OAuth2 client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_id WebhookOauth2ClientCredentials#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

The OAuth2 client secret.

This value is not returned by the API, so it cannot be detected as drifted or filled in on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_secret WebhookOauth2ClientCredentials#client_secret}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#name WebhookOauth2ClientCredentials#name}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.audience"></a>

- *Type:* java.lang.String

The audience requested when fetching the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#audience WebhookOauth2ClientCredentials#audience}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

The scope requested when fetching the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#scope WebhookOauth2ClientCredentials#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAudience` <a name="resetAudience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetAudience"></a>

```java
public void resetAudience()
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetScope"></a>

```java
public void resetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WebhookOauth2ClientCredentials resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isConstruct"></a>

```java
import io.cdktn.providers.datadog.webhook_oauth2_client_credentials.WebhookOauth2ClientCredentials;

WebhookOauth2ClientCredentials.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.webhook_oauth2_client_credentials.WebhookOauth2ClientCredentials;

WebhookOauth2ClientCredentials.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.webhook_oauth2_client_credentials.WebhookOauth2ClientCredentials;

WebhookOauth2ClientCredentials.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.webhook_oauth2_client_credentials.WebhookOauth2ClientCredentials;

WebhookOauth2ClientCredentials.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WebhookOauth2ClientCredentials.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WebhookOauth2ClientCredentials resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WebhookOauth2ClientCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WebhookOauth2ClientCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WebhookOauth2ClientCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrlInput">accessTokenUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrl">accessTokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `accessTokenUrlInput`<sup>Optional</sup> <a name="accessTokenUrlInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrlInput"></a>

```java
public java.lang.String getAccessTokenUrlInput();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `accessTokenUrl`<sup>Required</sup> <a name="accessTokenUrl" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrl"></a>

```java
public java.lang.String getAccessTokenUrl();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WebhookOauth2ClientCredentialsConfig <a name="WebhookOauth2ClientCredentialsConfig" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.webhook_oauth2_client_credentials.WebhookOauth2ClientCredentialsConfig;

WebhookOauth2ClientCredentialsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessTokenUrl(java.lang.String)
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .name(java.lang.String)
//  .audience(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.accessTokenUrl">accessTokenUrl</a></code> | <code>java.lang.String</code> | The URL used to fetch the access token. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The OAuth2 client ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The OAuth2 client secret. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the auth method. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.audience">audience</a></code> | <code>java.lang.String</code> | The audience requested when fetching the access token. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | The scope requested when fetching the access token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessTokenUrl`<sup>Required</sup> <a name="accessTokenUrl" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.accessTokenUrl"></a>

```java
public java.lang.String getAccessTokenUrl();
```

- *Type:* java.lang.String

The URL used to fetch the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#access_token_url WebhookOauth2ClientCredentials#access_token_url}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The OAuth2 client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_id WebhookOauth2ClientCredentials#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The OAuth2 client secret.

This value is not returned by the API, so it cannot be detected as drifted or filled in on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_secret WebhookOauth2ClientCredentials#client_secret}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#name WebhookOauth2ClientCredentials#name}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

The audience requested when fetching the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#audience WebhookOauth2ClientCredentials#audience}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The scope requested when fetching the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#scope WebhookOauth2ClientCredentials#scope}

---



